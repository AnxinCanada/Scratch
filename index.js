const icon = "data:image/png;base64,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";

class Utilities {

  constructor() {}

  getInfo() {
    return {
      id: 'utilities',
      name: 'Utlities',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] is exactly [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'scratch'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'SCRATCH'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
              defaultValue: 0
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
              defaultValue: 0
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://translate-service.scratch.mit.edu/translate?language=eo&text=hello'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [STRING] using the rule [REGEX] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bananas are awesome. i like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        }
      ]
    }
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch(URL).then(res => res.text())
      .catch(err => '');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }

}

Scratch.extensions.register(new Utilities());
