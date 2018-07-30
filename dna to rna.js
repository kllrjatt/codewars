/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a funciton which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns ("GCAU")
*/

function DNAtoRNA(dna) {
  var result = [];
  for (var i = 0; i < dna.length; i = i + 1) {
    if (dna.charAt(i) === 'T') {
      result.push('U')
    }
    else {
      result.push(dna.charAt(i))
    };
  };
  return result.join('')
}; 