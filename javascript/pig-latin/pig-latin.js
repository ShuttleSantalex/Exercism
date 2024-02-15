//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const VOWELS = 'aeiou';
const CLUSTERS = ['ch', 'qu', 'squ', 'th', 'thr', 'sch', 'rh'];
const EXCEPTIONS = ['yt', 'xr'];

const PIG_LATIN_SIGNATURE = 'ay';

// word: string
export const translate = (content) => {
  const isSentence = content.includes(' ');

  const translateWord = (word) => {
    const firstLetter = word[0];

    const isFirstLetterVowel = VOWELS.includes(firstLetter);
    const isFirstLetterConsonant = !isFirstLetterVowel;
    const isException = EXCEPTIONS.some((cluster) => word.startsWith(cluster));

    if (isFirstLetterVowel || isException) {
      return `${word}${PIG_LATIN_SIGNATURE}`;
    }

    if(isFirstLetterConsonant) {
      const hasCluster = CLUSTERS.filter((cluster) => word.startsWith(cluster));
      const lastClusterElement = hasCluster[hasCluster.length -1];
      const slicedWord = hasCluster.length ? word.slice(lastClusterElement.length) : word.slice(1);
      const movedSlicedWord = hasCluster.length ? lastClusterElement : firstLetter;
      return `${slicedWord}${movedSlicedWord}${PIG_LATIN_SIGNATURE}`;
    }
  }


  if(isSentence) {
    return content.split(' ').map(word => translateWord(word)).join(' ');
  }

  return translateWord(content);
};
