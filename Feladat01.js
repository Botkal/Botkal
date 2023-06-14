class ColorMixer {
  constructor(colors) {
    this.colors = colors;
    this.mixedColors = new Set();
  }

  countMixedColors() {
    const len = this.colors.length;

    // Az alapszínek hozzáadása a kevert színekhez
    for (let i = 0; i < len; i++) {
      this.mixedColors.add(this.colors[i]);
    }

    // Az alapszínek összekeverése
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const mixedColor = this.colors[i] + '+' + this.colors[j];
        this.mixedColors.add(mixedColor);

        for (let k = j + 1; k < len; k++) {
          const mixedColor2 = mixedColor + '+' + this.colors[k];
          this.mixedColors.add(mixedColor2);
        }
      }
    }

    // A kevert színek számának visszaadása
    return this.mixedColors.size;
  }
}

// Teszteset
const colors = ['piros', 'kék', 'sárga'];
const mixer = new ColorMixer(colors);
const result = mixer.countMixedColors();
console.log(result);