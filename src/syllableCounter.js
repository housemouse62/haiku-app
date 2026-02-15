// syllableCounter.js
// Counts syllables in a text using pattern-based rules

export function countSyllables(text) {
  if (!text.trim()) return 0;
  
  // Convert to lowercase and remove punctuation
  text = text.toLowerCase().replace(/[^a-z\s]/g, '');
  
  // Split into words
  const words = text.split(/\s+/).filter(word => word.length > 0);
  
  let totalSyllables = 0;
  
  words.forEach(word => {
    let syllables = 0;
    
    // Count vowel groups (a, e, i, o, u, y)
    const vowelGroups = word.match(/[aeiouy]+/g);
    if (vowelGroups) {
      syllables = vowelGroups.length;
    }
    
    // Subtract for silent 'e' at the end
    if (word.endsWith('e') && syllables > 1) {
      syllables--;
    }
    
    // Special cases for common endings
    if (word.endsWith('le') && word.length > 2 && !/[aeiouy]/.test(word[word.length - 3])) {
      syllables++;
    }
    
    // Every word has at least 1 syllable
    if (syllables === 0) {
      syllables = 1;
    }
    
    totalSyllables += syllables;
  });
  
  return totalSyllables;
}
