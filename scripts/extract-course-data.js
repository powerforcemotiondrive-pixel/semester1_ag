#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractObjectives(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `obj${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const items = [];
  const itemRegex = /<span class="bg-[^"]* text-white text-xs font-bold px-2\.5 py-0\.5 rounded-md shrink-0">(\d+)<\/span>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = itemRegex.exec(html)) !== null) {
    items.push({
      num: parseInt(m[1], 10),
      title: cleanText(m[2]),
      description: cleanText(m[3])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : `Session ${sessionNum} Objectives`),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    items
  };
}

function extractLessonPlan(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `plan${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const items = [];
  const itemRegex = /<span class="bg-[^"]* text-white text-xs font-bold py-1 rounded-md text-center flex items-center justify-center self-center">([^<]+)<\/span>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = itemRegex.exec(html)) !== null) {
    items.push({
      time: cleanText(m[1]),
      title: cleanText(m[2]),
      description: cleanText(m[3])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : `Session ${sessionNum} Lesson Plan`),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    items
  };
}

function extractRevision(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `rev${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const terms = [];
  const termRegex = /<h3 class="text-xs sm:text-sm font-bold [^"]* truncate">([\s\S]*?)<\/h3>[\s\S]*?<span class="bg-[^"]* text-white text-\[10px\] font-bold px-1\.5 py-0\.5 rounded shrink-0">(\d+)<\/span>[\s\S]*?<p class="text-\[11px\] text-slate-600 leading-snug pt-1\.5">([\s\S]*?)<\/p>/g;
  let m;
  while ((m = termRegex.exec(html)) !== null) {
    terms.push({
      num: m[2],
      term: cleanText(m[1]),
      definition: cleanText(m[3])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : `Session ${sessionNum} Revision`),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    terms
  };
}

function extractAdditionalMaterials(sessionNum, modNum) {
  const filePath = path.join(rootDir, `session${sessionNum}`, `admat${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Videos
  const videos = [];
  const videoCardRegex = /<div class="compact-video-card">[\s\S]*?<span class="video-title"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<a href="([^"]+)"[^>]*>Watch[^<]*<\/a>[\s\S]*?<span class="tag-pill[^"]*">([\s\S]*?)<\/span>[\s\S]*?data-video-id="([^"]+)"[\s\S]*?<p class="video-caption">([\s\S]*?)<\/p>/g;
  let vm;
  while ((vm = videoCardRegex.exec(html)) !== null) {
    videos.push({
      title: cleanText(vm[1]),
      watchUrl: vm[2].trim(),
      tag: cleanText(vm[3]),
      videoId: vm[4].trim(),
      embedUrl: `https://www.youtube-nocookie.com/embed/${vm[4].trim()}`,
      caption: cleanText(vm[5].replace(/<[^>]+>/g, ' '))
    });
  }

  // 2. Grammar Point
  const grammarTitleMatch = html.match(/<span class="grammar-card-title"[^>]*>([\s\S]*?)<\/span>/);
  const grammarFormulaMatch = html.match(/<div class="grammar-formula">([\s\S]*?)<\/div>/);
  const grammarTrapMatch = html.match(/The #1 Past vs\. Present Perfect Trap:[^<]*<\/strong>([\s\S]*?)<\/div>/) ||
                           html.match(/<strong>⚠️[^<]*<\/strong>([\s\S]*?)<\/div>/);

  const grammar = {
    title: cleanText(grammarTitleMatch ? grammarTitleMatch[1] : 'Grammar Focus'),
    formula: cleanText(grammarFormulaMatch ? grammarFormulaMatch[1] : ''),
    trap: cleanText(grammarTrapMatch ? grammarTrapMatch[1] : '')
  };

  // 3. TOEIC Question
  const stemMatch = html.match(/<p class="toeic-question-stem">([\s\S]*?)<\/p>/);
  const options = [];
  const optRegex = /<div class="toeic-option-item">[\s\S]*?<span class="toeic-option-letter">\((\w)\)<\/span>([\s\S]*?)<\/div>/g;
  let om;
  while ((om = optRegex.exec(html)) !== null) {
    options.push({
      letter: om[1].trim(),
      text: cleanText(om[2])
    });
  }

  const correctMatch = html.match(/Correct Answer:\s*\((\w)\)\s*([^<\n]+)/);
  const analysisMatch = html.match(/<strong>Grammar Analysis:<\/strong>([\s\S]*?)<\/p>/);
  const strategyMatch = html.match(/<strong>📌 TOEIC Strategy Rule:<\/strong>([\s\S]*?)<\/div>/);

  const toeic = {
    stem: cleanText(stemMatch ? stemMatch[1] : ''),
    options,
    correctLetter: correctMatch ? correctMatch[1].trim() : 'C',
    correctText: correctMatch ? cleanText(correctMatch[2]) : '',
    analysis: cleanText(analysisMatch ? analysisMatch[1] : ''),
    strategy: cleanText(strategyMatch ? strategyMatch[1] : '')
  };

  // 4. Resources
  const resources = [];
  const resRegex = /<a href="([^"]+)"[^>]*class="resource-card">[\s\S]*?<span class="resource-tag">([\s\S]*?)<\/span>[\s\S]*?<h4 class="resource-name">([\s\S]*?)<\/h4>[\s\S]*?<p class="resource-desc">([\s\S]*?)<\/p>/g;
  let rm;
  while ((rm = resRegex.exec(html)) !== null) {
    resources.push({
      url: rm[1].trim(),
      tag: cleanText(rm[2]),
      name: cleanText(rm[3]),
      desc: cleanText(rm[4])
    });
  }

  return {
    videos,
    grammar,
    toeic,
    resources,
    pageUrl: `session${sessionNum}/admat${modNum}.html`
  };
}

function extractDDRS(modNum) {
  const filePath = path.join(rootDir, `ddrs${modNum}.html`);
  if (!fs.existsSync(filePath)) return null;
  const html = fs.readFileSync(filePath, 'utf8');

  const titleMatch = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/);
  const descMatch = html.match(/<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">([\s\S]*?)<\/p>/);

  const axes = [];
  const axeRegex = /<span class="[^"]*theme-axe-badge[^"]*">([\s\S]*?)<\/span>[\s\S]*?<span class="[^"]*theme-axe-num[^"]*">([\s\S]*?)<\/span>[\s\S]*?<h3 class="[^"]*theme-axe-title[^"]*">([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = axeRegex.exec(html)) !== null) {
    axes.push({
      badge: cleanText(m[1]),
      num: cleanText(m[2]),
      title: cleanText(m[3]),
      desc: cleanText(m[4])
    });
  }

  return {
    title: cleanText(titleMatch ? titleMatch[1] : 'DDRS Framework'),
    summary: cleanText(descMatch ? descMatch[1] : ''),
    pageUrl: `ddrs${modNum}.html`,
    axes
  };
}

const modules = [
  { id: 1, name: 'Module 1', title: 'Travel, Transport & Leisure' },
  { id: 2, name: 'Module 2', title: 'Weather & the Environment' },
  { id: 3, name: 'Module 3', title: 'New Technology' }
];

const compiledData = {};

modules.forEach(mod => {
  compiledData[mod.id] = {
    id: mod.id,
    name: mod.name,
    title: mod.title,
    ddrs: extractDDRS(mod.id),
    sessions: {}
  };

  for (let s = 1; s <= 4; s++) {
    compiledData[mod.id].sessions[s] = {
      session: s,
      objectives: extractObjectives(s, mod.id),
      lessonPlan: extractLessonPlan(s, mod.id),
      revision: extractRevision(s, mod.id),
      materials: extractAdditionalMaterials(s, mod.id)
    };
  }
});

const outJsPath = path.join(dataDir, 'course-data.js');
const fileContent = `/**
 * GSEA Semester 1 - General English
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return ${JSON.stringify(compiledData, null, 2)};
});
`;

fs.writeFileSync(outJsPath, fileContent, 'utf8');
console.log('✓ Successfully generated data/course-data.js with complete multimedia and TOEIC quizzes!');

