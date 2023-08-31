let s, t;

export const createSeed = () => {

    let x = "0123456789abcdef";
    let hash = '0x';

    for (let i = 64; i > 0; --i) {
            hash += x[Math.floor(Math.random() * x.length)]
    };

    let tokenData = {
        "hash": hash,
        "tokenId": "123000456"
    };

    return tokenData.hash;
};

export const seed = createSeed();

export const S = Uint32Array.from([0, 1, s = t = 2, 3].map(i => parseInt(seed.substr(i * 8 + 5, 8), 16)));

export const R = (a=1) => a*(t=S[3],S[3]=S[2],S[2]=S[1],S[1]=s=S[0],t^=t<<11,S[0]^=(t^t>>>8)^(s>>>19),S[0]/2**32);

export const range = (min, max) => {
	
    if (max === undefined) {
		max = min;
		min = 0;
	}
    return R() * (max - min) + min;
};

export const rangeFloor = (min, max) => { Math.floor(range(min, max)) };

export const boolean = () => { R() > 0.5 };

export const pick = (array) => { array.length ? array[rangeFloor(array.length)] : undefined; };
  
export const weighted = (weights) => {
	
    let totalWeight = 0;
	let i;
  
	for (i = 0; i < weights.length; i++) {
	  totalWeight += weights[i];
	}
  
	let random = R() * totalWeight;
	for (i = 0; i < weights.length; i++) {
	  if (random < weights[i]) {
		return i;
	  }
	  random -= weights[i];
	}
	return 0;
};

