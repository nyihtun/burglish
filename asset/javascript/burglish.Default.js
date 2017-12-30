var gv = "1.9.12.090705";
var wB = {
  'ynn': ['$1င္း'],
  'yn': ['$1င္', '$1င္း'],
  'ye': ['$1ိုင္း', '$1ိုင္', '$1ိုင့္'],
  'y': ['$1ိုင္', '$1ိုင္း', '$1ိုင့္'],
  'uz': ['$1ြဇ္', 'ေ$1ာဇ္'],
  'uu': ['$1ူး'],
  'ut': ['$1ြတ္', '$1ြပ္', 'ေ$1ာတ္', '$1ြဋ္'],
  'urt': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'urd': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'urr': ['$1ား'],
  'urk': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'urh': ['$1ာ့'],
  'urd': ['$1ာဒ္', '$1ာ႒္'],
  'urb': ['$1ာဘ္'],
  'ur': ['$1ာ', '$1ား', '$1ာ့'],
  'unt': ['$1ြန္႕', '$1ြံ႕', '$1ြမ့္'],
  'unn': ['$1ြန္း', '$1ြမ္း', '$1န္း', '$1ြဏ္း'],
  'un': ['$1ြန္', '$1ြန္း', '$1ြမ္', '$1ြံ', '$1ြဏ္', '$1ြဏ္း'],
  'umt': ['$1ြမ့္'],
  'umm': ['$1ြမ္း', '$1ြမ္'],
  'um': ['$1ြမ္', '$1ြမ္း'],
  'uh': ['$1ူ႕'],
  'u': ['$1ူ', '$1ု', '$1ူ႕'],
  't': ['ေ$1ာက္'],
  'rr': ['$1ား'],
  'rh': ['$1ာ့'],
  'r': ['$1ာ', '$1ား', '$1ာ့'],
  'oy': ['$1ိြဳင္'],
  'ove': ['$1ုဗ္'],
  'ov': ['$1ုဗ္'],
  'out': ['ေ$1ာက္', 'ေ$1ာတ္', 'ေ$1ာဂ္'],
  'ount': ['ေ$1ာင့္'],
  'ounh': ['ေ$1ာင့္'],
  'oung': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'oun': ['ေ$1ာင္', 'ေ$1ာင္း', 'ေ$1ာင့္'],
  'oun': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'ou': ['$1ိုး', '$1ို'],
  'oth': ['$1ို႕'],
  'ote': ['$1ုတ္', '$1ုပ္', '$1ုက္', '$1ုစ္', '$1ုဇ္', '$1ုဂ္', '$1ုဋ္'],
  'ot': ['ေ$1ာ့', '$1ုတ္', '$1ုပ္', '$1ုက္', '$1ုစ္', '$1ုဇ္', '$1ုဂ္', '$1ုဋ္'],
  'ot': ['$1ို႕', 'ေ$1ာ့', '$1ိုယ့္'],
  'ort': ['ေ$1ာ့'],
  'orh': ['ေ$1ာ့'],
  'or': ['ေ$1ာ္', 'ေ$1ာ'],
  'ope': ['$1ုပ္', '$1ုတ္'],
  'op': ['$1ုပ္', '$1ုတ္'],
  'op': ['$1ို႕', 'ေ$1ာ့', '$1ိုယ့္'],
  'ooz': ['$1ြဇ္', 'ေ$1ာဇ္'],
  'oot': ['$1ြတ္', '$1ြပ္'],
  'oont': ['$1ြန့္', '$1ြမ့္'],
  'oonh': ['$1ြန့္', '$1ြမ့္'],
  'oon': ['$1ြန္း', '$1ြန္', '$1ြမ္း', '$1ြမ္'],
  'oomt': ['$1ြမ့္', '$1ြန့္'],
  'oomh': ['$1ြမ့္', '$1ြန့္'],
  'oom': ['$1ြမ္း', '$1ြမ္'],
  'ood': ['$1ြဒ္', '$1ြတ္'],
  'oo': ['$1ိုး', '$1ူး'],
  'ont': ['$1ြန္႔', '$1ြံ႕', '$1ြမ့္', '$1ုန္႕', '$1ံု႕'],
  'one': ['$1ုန္း', '$1ုမ္း', '$1ုံး', '$1ုဥ္း', '$1ုန္', '$1ုမ္', '$1ုံ'],
  'on': ['$1ြန္', '$1ြံ', '$1ံု', '$1ြဏ္'],
  'ol': ['$1ိုလ္', 'ေ$1ာ', '$1ိုဠ္'],
  'oke': ['$1ုက္'],
  'ok': ['$1ုက္'],
  'oi': ['$1ိြဳင္'],
  'ohnh': ['$1ုန္႕', '$1ုမ့္'],
  'ohn': ['$1ုန္း', '$1ုမ္း'],
  'ohmh': ['$1ုန္႕', '$1ုမ့္'],
  'ohm': ['$1ုန္း', '$1ုမ္း'],
  'oh': ['$1ို႕', 'ေ$1ာ့', '$1ိုယ့္'],
  'oet': ['$1ို႕'],
  'oeh': ['$1ို႕'],
  'oe': ['$1ိုး'],
  'ode': ['$1ုဒ္', '$1ုဎ္'],
  'od': ['$1ုဒ္', '$1ုဎ္'],
  'oav': ['$1ုဗ္'],
  'oat': ['$1ုတ္', '$1ုပ္', '$1ုက္', '$1ုစ္', '$1ုဇ္', '$1ုဂ္', '$1ုဋ္'],
  'oap': ['$1ုပ္', '$1ုတ္'],
  'oant': ['$1ုန္႕', '$1ုမ့္', '$1ံု႔', '$1ုဥ့္'],
  'oann': ['$1ုန္း', '$1ုမ္း', '$1ံုး', '$1ုဥ္း'],
  'oanh': ['$1ုန္႕', '$1ုမ့္', '$1ံု႔', '$1ုဥ့္'],
  'oan': ['$1ုန္', '$1ုမ္', '$1ံု', '$1ုဏ္', '$1ုဥ္', '$1ုလ္'],
  'oak': ['$1ုက္'],
  'oad': ['$1ုဒ္', '$1ုဎ္', '$1ုသ္'],
  'oa': ['$1ြာ'],
  'o': ['$1ို', '$1ိုး', '$1ိုရ္', '$1ိုယ္', '$1ိုဠ္', '$1ိုဟ္'],
  'iz': ['$1ဇ္', '$1ာဇ္'],
  'ite': ['$1ိုက္'],
  'it': ['$1စ္', '$1တ္', 'ေ$1တ္', 'ေ$1က္', '$1ဋ္', 'ေ$1စ္'],
  'is': ['$1စ္', 'ေ$1စ္'],
  'is': ['$1စ္', '$1တ္', 'ေ$1တ္', 'ေ$1က္', '$1ဋ္', 'ေ$1စ္'],
  'int': ['$1င့္', '$1ဥ့္'],
  'inn': ['$1င္း', '$1ဥ္း'],
  'ing': ['$1င္း', '$1ဥ္း'],
  'ine': ['$1ိုင္', '$1ိုင္း', '$1ိုဏ္း'],
  'in': ['$1င္', '$1င္း', '$1ဥ္', 'ေ$1န္', '$1ဥ္း'],
  'ike': ['$1ိုက္'],
  'ik': ['$1စ္', '$1တ္', 'ေ$1တ္', 'ေ$1က္', '$1ဋ္', 'ေ$1စ္'],
  'ii': ['$1ီး', '$1ည္း', '$1ည့္'],
  'ih': ['$1ည့္'],
  'ide': ['$1ိုဒ္'],
  'id': ['$1စ္'],
  'i': ['$1ိ', '$1ီ', '$1ည္', '$1ည္း', '$1ည့္'],
  'g': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'f': ['$1္'],
  'eyy': ['ေ$1း', '$1ည္း'],
  'eyt': ['ေ$1့', '$1ည့္'],
  'eyh': ['ေ$1့', '$1ည့္'],
  'ey': ['ေ$1း', '$1ည္း'],
  'ey': ['ေ$1', '$1ည္', 'ေ$1း', 'ေ$1့', '$1ည္း'],
  'et': ['$1က္', '$1တ္', '$1ပ္'],
  'ert': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'ert': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'err': ['$1ား'],
  'erk': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'erh': ['$1ာ့'],
  'erd': ['$1ာဒ္', '$1ာ႒္'],
  'erb': ['$1ာဘ္'],
  'er': ['$1ာ', '$1ား', '$1ာ့'],
  'en': ['$1ဲန္း', '$1ဲန္', '$1န္'],
  'elh': ['$1ဲ့', '$1ယ့္', '$1ည့္'],
  'el': ['$1ဲ', '$1ယ္', '$1ည္', '$1ည္း', '$1ဲ့', '$1ည့္'],
  'ek': ['$1က္'],
  'eit': ['$1ိတ္', '$1ိပ္', '$1ိက္', '$1ိဋ္', '$1ိသ္'],
  'eint': ['$1ိန္႕', '$1ိမ့္'],
  'einn': ['$1ိန္း', '$1ိမ္း', '$1ိဏ္း'],
  'einh': ['$1ိန္႕', '$1ိမ့္'],
  'ein': ['$1ိန္', '$1ိမ္', '$1ႎ', '$1ိင္', '$1ိဥ္', '$1ိဏ္', '$1ိလ္'],
  'eih': ['ေ$1့', '$1ဲ့', '$1ယ့္', '$1ည့္'],
  'ei': ['ေ$1း', '$1ဲ', '$1ယ္', 'ေ$1', '$1ည္း', '$1ည္'],
  'eh': ['$1ဲ့', '$1ည့္', 'ေ$1့', '$1ဲ', '$1ည္'],
  'ee': ['$1ီး', '$1ည္း'],
  'eck': ['$1က္'],
  'ec': ['$1က္'],
  'e`': ['$1ဲ့', '$1ဲ'],
  'e': ['$1ီ', '$1ဲ', '$1ည္', '$1ယ္', 'ေ$1', 'ေ$1း', '$1ည့္', '$1ဲ့'],
  'ayy': ['ေ$1း', '$1ည္း'],
  'ayt': ['ေ$1့', '$1ည့္'],
  'ayh': ['ေ$1့', '$1ည့္'],
  'aye': ['ေ$1း', '$1ည္း'],
  'ay': ['ေ$1', '$1ည္', 'ေ$1း', 'ေ$1့', '$1ည္း'],
  'aww': ['ေ$1ာ'],
  'awt': ['ေ$1ာ့'],
  'awn': ['ေ$1ာန္'],
  'awh': ['ေ$1ာ့'],
  'aw': ['ေ$1ာ', 'ေ$1ာ္', 'ေ$1ာ့', 'ေ$1ာဝ္'],
  'ave': ['$1ိဗ္'],
  'av': ['$1ဗ္'],
  'aut': ['ေ$1ာက္', 'ေ$1ာတ္'],
  'aunt': ['ေ$1ာင့္'],
  'aunh': ['ေ$1ာင့္'],
  'aung': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'aun': ['ေ$1ာင္', 'ေ$1ာင္း', 'ေ$1ာင့္'],
  'aun': ['ေ$1ာင္', 'ေ$1ာင္း'],
  'auk': ['ေ$1ာက္', 'ေ$1ာတ္'],
  'au': ['ေ$1ာ'],
  'ath': ['$1သ္'],
  'ate': ['$1ိတ္', '$1ိပ္', '$1ိဇ္', '$1ိစ္', '$1ိက္', '$1ိဋ္', '$1ိသ္'],
  'at': ['$1တ္', '$1က္', '$1ပ္', '$1ဟ္', '$1ဋ္'],
  'art': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'art': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'arr': ['$1ား'],
  'arnn': ['$1ာန္း', '$1ာဏ္း'],
  'arn': ['$1ာန္', '$1ာဏ္', '$1ာဟ္'],
  'arl': ['$1ာယ္', '$1ာည္'],
  'ark': ['$1ာတ္', '$1ာက္', '$1ာဟ္'],
  'arh': ['$1ာ့'],
  'ard': ['$1ာဒ္', '$1ာ႒္'],
  'arb': ['$1ာဘ္'],
  'ar': ['$1ာ', '$1ား', '$1ာ့'],
  'ape': ['$1ိပ္'],
  'ap': ['$1ပ္'],
  'ant': ['$1န္႕', '$1ံ့', '$1မ့္'],
  'ann': ['$1န္း', '$1မ္း', '$1ဏ္း'],
  'an': ['$1န္', '$1ံ', '$1မ္', '$1ဏ္', '$1လ္'],
  'amm': ['$1မ္း'],
  'am': ['$1မ္', '$1မ္း', '$1န္', '$1ံ'],
  'alh': ['$1ယ့္', '$1ဲ့', '$1ည့္', '$1ဲ', '$1ည္'],
  'al': ['$1ယ္', '$1ဲ', '$1ည္', '$1ည္း', '$1ဲ့', '$1ည့္', '$1လ္'],
  'ake': ['$1ိက္', '$1ိတ္'],
  'ak': ['$1က္'],
  'aiv': ['$1ိဗ္'],
  'ait': ['$1ိတ္', '$1ိပ္', '$1ိဇ္', '$1ိစ္', '$1ိက္'],
  'aid': ['$1ိတ္', '$1ိပ္', '$1ိက္', '$1ိဋ္', '$1ိသ္'],
  'aip': ['$1ိပ္'],
  'aint': ['$1ိန္႕', '$1ိမ့္'],
  'ainn': ['$1ိန္း', '$1ိမ္း', '$1ိဏ္း'],
  'ainh': ['$1ိန္႕', '$1ိမ့္'],
  'aing': ['$1ိုင္', '$1ိုင္း'],
  'ain': ['$1ိန္', '$1ိမ္', '$1ႎ', '$1ိင္', '$1ိဥ္', '$1ိဏ္', '$1ိလ္'],
  'aik': ['$1ိက္', '$1ိတ္'],
  'aid': ['$1ိဒ္'],
  'ai': ['$1ိုင္း', '$1ိုင္', '$1ိုဏ္း', '$1ိုင့္', 'ေ$1'],
  'ag': ['$1ဂ္'],
  'aeh': ['ေ$1့', '$1ည့္', '$1ဲ့'],
  'ae': ['$1ယ္', '$1ဲ', 'ေ$1', '$1ည္', 'ေ$1း'],
  'ade': ['$1ိဒ္'],
  'ad': ['$1ဒ္', '$1ဎ္'],
  'ack': ['$1က္'],
  'ac': ['$1က္'],
  'ab': ['$1ဘ္'],
  'a`': ['$1ဲ့', '$1ဲ'],
  'a': ['$1', '$1ာ့'],
  '`': ['$1ဲ့', '$1ဲ']
};
var wU = {
  'zz': ['စ်'],
  'zw': ['ဇြ'],
  'zh': ['စ်'],
  'z': ['ဇ', 'စ်'],
  'yy': ['ယ', 'ယ်'],
  'yw': ['ရြ', 'ယြ'],
  'yh': ['ယွ'],
  'yh': ['ယ', 'ယ်'],
  'y': ['ရ', 'ယ', 'လ်', 'ယ်'],
  'x': ['ဆ', 'စ'],
  'wh': ['ဝွ'],
  'w': ['ဝ'],
  'v': ['ဗ', 'ဘ'],
  'u': ['အ'],
  'ty': ['တ်', 'ၾတ'],
  'tw': ['တြ'],
  'tt': ['ဋ'],
  'tr': ['တ်', 'ၾတ'],
  'thw': ['သြ'],
  'th': ['သ'],
  't': ['တ', 'ဋ', 'ထ'],
  'sy': ['ၾဆ'],
  'sw': ['စြ', 'ဆြ'],
  'ss': ['ဆ'],
  'shw': ['ရႊ'],
  'sh': ['ရွ', 'လွ်', 'သွ်'],
  's': ['စ', 'ဆ'],
  'r': ['ရ', 'ယ', 'လ်'],
  'q': ['က'],
  'py': ['ျပ', 'ပ်'],
  'pw': ['ပြ'],
  'phy': ['ျဖ', 'ဖ်'],
  'phw': ['ဖြ'],
  'ph': ['ဖ'],
  'p': ['ပ'],
  'o': ['အ'],
  'ny': ['ည', 'ျင', 'ဉ'],
  'nw': ['ႏြ'],
  'nn': ['ဏ'],
  'nhy': ['ညွ', 'ျငွ', 'ဥွ'],
  'nhw': ['ႏႊ'],
  'nhg': ['ငွ'],
  'nh': ['ငွ', 'ႏွ', 'ဏွ'],
  'ngw': ['ငြ'],
  'ngh': ['ငွ'],
  'ng': ['င'],
  'n': ['န', 'ဏ'],
  'my': ['ျမ', 'မ်'],
  'mw': ['မြ', 'ျမြ'],
  'mhy': ['မွ်', 'ျမွ'],
  'mhw': ['မႊ', 'ျမႊ'],
  'mh': ['မွ'],
  'm': ['မ'],
  'ly': ['လ်', 'လွ်'],
  'lw': ['လြ', 'လႊ'],
  'll': ['ဠ'],
  'lhy': ['လွ်', 'လ်'],
  'lhw': ['လႊ'],
  'lh': ['လွ', 'ဠွ'],
  'l': ['လ', 'ဠ'],
  'kyw': ['ၾကြ', 'ကြၽ'],
  'ky': ['က်', 'ၾက'],
  'kw': ['ကြ'],
  'khw': ['ခြ'],
  'kh': ['ခ'],
  'k': ['က', 'ခ'],
  'j': ['ဂ်', 'ျဂ'],
  'i': ['အ'],
  'hw': ['ဟြ'],
  'htw': ['ထြ'],
  'htt': ['ဌ'],
  'ht': ['ထ', 'ဌ', '႒'],
  'hs': ['ဆ'],
  'hnw': ['ႏႊ'],
  'hn': ['ႏွ', 'ဏွ'],
  'hmy': ['မွ်', 'ျမွ'],
  'hmw': ['မႊ', 'ျမႊ'],
  'hm': ['မွ'],
  'hly': ['လွ်', 'လ်'],
  'hlw': ['လႊ'],
  'hl': ['လွ', 'ဠွ'],
  'hdd': ['ဎ'],
  'hd': ['ဍ', 'ဎ'],
  'h': ['ဟ'],
  'gy': ['ဂ်', 'ျဂ', 'ၾက'],
  'gw': ['ဂြ'],
  'gh': ['ဃ'],
  'gg': ['ဃ'],
  'g': ['ဂ', 'က', 'ဃ'],
  'fy': ['ျဖ', 'ဖ်'],
  'fw': ['ဖြ', 'ဘြ'],
  'f': ['ဖ'],
  'e': ['အ'],
  'dw': ['ဒြ', 'ျဒ'],
  'dr': ['ဒြ', 'ျဒ'],
  'dd': ['ဓ'],
  'd': ['ဒ', 'ဓ', 'တ', 'ဍ', 'ဎ'],
  'chw': ['ခြၽ', 'ျခြ'],
  'ch': ['ခ်', 'ျခ'],
  'c': ['က'],
  'by': ['ဗ်', 'ျဗ', 'ဘ်'],
  'bw': ['ဘြ', 'ဗြ', 'ပြ'],
  'b': ['ဘ', 'ဗ', 'ပ'],
  'a': ['အ']
};
var wj = [
  ['([^ျၾ][ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ', '$1ါ'],
  ['^([ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ', '$1ါ'],
  ['ါ္', 'ၚ'],
  ['န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])', 'ႏ$1'],
  ['([ၠ-ၼႇွုူႈႉြႊန်ဳဴ].?)[့႔]', '$1႕'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု', '$1ဳ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု', '$1ဳ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ', '$1ဴ'],
  ['ွ([ံိႎဲ]?)ု', '$1ႈ'],
  ['ွ([ံိႎဲ]?)ူ', '$1ႉ'],
  ['ရ([ံိႎဲ]?[ုူႈႉ])', '႐$1'],
  ['ွ([ိႎဲၽ်]?)ွ', 'ွ$1'],
  ['ြွ|ွြ|ႊွ', 'ႊ'],
  ['်ြ', 'ြၽ'],
  ['[ွႇ]([ိီ်ၽ]?)ြ', 'ႊ$1'],
  ['်ွ', 'ွ်'],
  ['([ျၾ].{0,2})ွ', '$1ႇ'],
  ['([ဝြႊ].{0,2})ြ', '$1'],
  ['([ဥ])[ုဳ]', '$1'],
  ['ၤ(.{0,2})ိ', 'ႋ$1'],
  ['ၤ(.{0,2})ီ', 'ႌ$1'],
  ['ာ႕', 'ာ့'],
  ['ၾ([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?ြ)', 'ႂ$1'],
  ['([^ျၾ][ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ္', '$1ၚ']
];
var wp = [
  ['[ၿႁႃ]', 'ျ'],
  ['[ႀႂႄ]', 'ၾ'],
  ['[့႔႕]+', '့'],
  ['\s+([ါ-ွ]+)', '$1'],
  ['(.?[ိံ].?)[ူ]', '$1ု'],
  ['ဳ', 'ု'],
  ['ဴ', 'ူ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု', '$1ဳ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု', '$1ဳ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)ၲ', '$1ၱ', 'ၱ', 'ၲ'],
  ['([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)ၴ', '$1ၳ', 'ၳ', 'ၴ'],
  ['([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)႓', '$1ၻ', 'ၻ', '႓'],
  ['[ျၿ-ႃ]([ကဃဆဏတထဘယလသဟ])', 'ၾ$1'],
  ['န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])', 'ႏ$1']
];
var wu = [
  ['([^ျၾ])?([ခဂငဒပဝ])ာ', '$1$2ါ'],
  ['ါ္', 'ၚ'],
  ['ၾ([ကအ])(ြ)', 'ႂ$1$2'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု', '$1ဳ'],
  ['([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု', '$1ဳ'],
  ['([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ', '$1ဴ'],
  ['([ြ][ိ-ံ]?)့', '$1႕'],
  ['[ွႇ]([ိီ်ၽ]?)ြ', 'ႊ$1'],
  ['န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])', 'ႏ$1']
];
var w9 = [
  ['အု', 'ဥ'],
  ['အိ(?![ု])', 'ဣ'],
  ['ေအာ(?![့္])', 'ဩ']
];
var wS = [
  ['တစ္', 'ႏွစ္', 'သံုး', 'ေလး', 'ငါး', 'ေျခာက္', 'ခုႏွစ္', 'ရွစ္', 'ကိုး'],
  [
    ['ဆယ္', 'ဆယ့္'],
    ['ရာ', 'ရာ့'],
    ['ေထာင္', 'ေထာင့္'],
    ['ေသာင္း', 'ေသာင္း'],
    ['သိန္း', 'သိန္း'],
    ['သန္း', 'သန္း'],
    ['ကုေဋ', 'ကုေဋ']
  ], '၀၁၂၃၄၅၆၇၈၉'
];
var wI = [
  ['kyarr', 'က်္ား', -1],
  ['kyunote', 'ကြၽႏု္ပ္', -1],
  ['nhite', '၌', -1],
  ['hnite', '၌', -1],
  ['shat', 'ယွက္', -1],
  ['nyin', 'ညာဥ္', -1],
  ['shin', 'ယွဥ္', -1],
  ['kyar', 'က်္ာ', -1],
  ['yway', '၍', -1],
  ['umm', 'အမ္'],
  ['imm', 'အင္းမ္...'],
  ['yin', 'ယာဥ္', -1],
  ['yin', 'ယ်ာဥ္', -1],
  ['ywe', '၍', -1],
  ['d', 'ဒီ'],
  ['u', 'ယူ'],
  ['own', 'အံုး', -1],
  ['it', 'ဧတ္'],
  ['el', 'ဧည့္'],
  ['ei', 'ဣ'],
  ['or', 'ဪ', -1],
  ['ei', '၏'],
  ['ei', 'ဤ'],
  ['oo', 'ဥ'],
  ['ah', 'အ'],
  ['aw', 'ဪ'],
  ['ay', 'ဧ'],
  ['ag', 'ေအာင္'],
  ['oo', 'ဦး'],
  ['oh', 'အိုး'],
  ['r', 'အာ'],
  ['ae', 'အဲ'],
  ['ei', 'အိ'],
  ['ei', 'အီ'],
  ['um', 'အမ္'],
  ['.', '။'],
  [',', '၊'],
  [',', 'ျပီး'],
  ['.', 'ျပီ'],
  ['4', '၎', -1],
  ['.', 'ဤ'],
  ['.', 'သည္'],
  ['.', '၏'],
  [',', '၌'],
  [',', '၍'],
  [',', 'ႏွင့္'],
  ['f', '--္', -1],
  ['b', 'ျပီ'],
  ['o', 'အို'],
  ['p', 'ျပီ'],
  ['e', 'ဤ'],
  ['a', 'အ'],
  ['a', 'ေအ', -1],
  ['u', 'ဥ'],
  ['u', 'ဦး'],
  ['h', '--့', -1],
  [';', 'း'],
  ['eu', 'အူ'],
  ['u', 'အူ'],
  ['u', 'အု'],
  ['a', 'အစ္', -1],
  ['tun', 'ထြန္း']
];
var wn = ['[ဍဋဌဣ][ႇွုူႈႉြႊ]', '[ဠ][ြႊ]', '[ၠ-ၼ႒][ႇွႈႉြႊ]'];
var w2 = ['က', 'ခ', 'ဂ', 'ဃ', 'င', 'စ', 'ဆ', 'ဇ', 'ဈ', 'ဉ', 'ၫ', 'ည', 'ဋ', 'ဌ', '႒', 'ဍ', 'ဎ', 'ဏ', 'တ', 'ထ', 'ဒ', 'ဓ', 'ႏ', 'န', 'ပ', 'ဖ', 'ဗ', 'ဘ', 'မ', 'ယ', '႐', 'ရ', 'လ', 'ဝ', 'သ', 'ႆ', 'ဟ', 'ဠ', 'အ', '--ဿ', '- ၠ', '- ၡ', '- ၢ', '- ၣ', '- ၥ', '- ၦ', '- ၧ', '- ၨ', '- ၩ', '- ၬ', '- ၭ', '- ၰ', '- ၱ', '- ၲ', '- ၳ', '- ၴ', '- ၵ', '- ၶ', '- ၷ', '- ၸ', '- ၹ', '- ၺ', '- ၻ', '- ႓', '- ၼ', '- ႅ', '၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', 'ေ', '- ိ', '- ီ', '- ္', '- ၤ', '- ာ', '- ါ', '- ၚ', '- ဲ', '- ြ', '- ႊ', '- ံ', '- း', '- ်', '- ၽ', 'ျ- ', 'ၾ- ', 'ၿ- ', 'ႀ- ', 'ႁ- ', 'ႂ- ', 'ႃ- ', 'ႄ- ', '- ့', '- ႔', '- ႕', '- ု', '- ူ', '- ဳ', '- ဴ', '- ႈ', '- ႉ', '- ွ', '- ႇ', '- ႋ', '- ႌ', '- ႎ', '- ႍ', 'ဣ', 'ဤ', 'ဥ', 'ၪ', 'ဦ', 'ဧ', 'ဩ', 'ဪ', '၍', '၌', '၎', '၏', '႗', 'ၮ', 'ၯ', '႑', '- ႖', '- ၊', '- ။'];
var w_ = ['က', 'ခ', 'ဂ', 'ဃ', 'င', 'စ', 'ဆ', 'ဇ', 'ဈ', 'ဉ', 'ည', 'ဋ', 'ဌ', 'ဍ', 'ဎ', 'ဏ', 'တ', 'ထ', 'ဒ', 'ဓ', 'န', 'ပ', 'ဖ', 'ဗ', 'ဘ', 'မ', 'ယ', 'ရ', 'လ', 'ဝ', 'သ', 'ဿ', 'ဟ', 'ဠ', 'အ', '၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', 'ေ', 'ိ', 'ီ', 'ု', 'ူ', '(--္)', '်', 'ာ', 'ါ', 'ဲ', 'ံ', '့', 'း', 'ျ', 'ြ', 'ွ', 'ှ', 'ဣ', 'ဤ', 'ဥ', 'ဦ', 'ဧ', 'ဩ', 'ဪ', '၍', '၌', '၎င်း', '၏', '-၊', '-။'];
var OD = new Object();

// =require burglish.NP.js
// =require burglish.Nb.js
// =require burglish.g3.js
// =require burglish.gW.js
// =require burglish.gF.js

var K3 = {
  "Myanmar3":['ဘယ်ညာ Arrow Key ကိုသုံးပြီးColumnကိုရွေးပါ။', 'အပေါ်အောက် Arrow Key ဖြင့်စာလုံးတစ်ခုစီရွေးသွားနိုင်ပါသည်။', 'Enter ကီး Tab ကီးစသည်တို့ဖြင့် စာလုံးကို အတည်ပြုနိုင်ပါသည်။', 'ဝ မှ ၉ အထိ Shortcut ကီးများကိုသုံးပါ။', 'ပုဒ်ကလေးပုဒ်မအတွက်,နှင့် . ကိုသုံးပါ။', '"စ်က်" စသည့်တို့ကိုရိုက်ချင်လျှင် sf,kf စသည်ဖြင့်ရိုက်ပါ။', 'အောက်ကမြစ်သပ်သပ်ရိုက်ချင်လျှင် h ဖြင့်ရိုက်ပါ။', 'ဝစ်စပေါက်သပ်သပ်ရိုက်ချင်လျှင်;ဖြင့်ရိုက်ပါ။', 'ပတ်ဆင့်များကို ရိုက်ချင်လျှင် စာလုံးအကြီးဖြင့်ရိုက်ပါ။ tak Ka thol - တက္ကသိုလ်', 'မောင် ကို mg, အောင် ကို ag,ကာ ကို kr, ပါကို pr ဖြင့်ရိုက်နိုင်သည်။', 'ဉာဏ်ကို nyarn, ပါယ် ကို parl စသည်ဖြင့်ရိုက်ပါ။', 'မြန်မာစာလုံး မရွေးလိုပါက Esc နှိပ်နိုင်ပါသည်။']
};

// =require burglish.hO.js
// =require burglish.N8.js
// =require burglish.Ns.js
// =require burglish.QF.js
// =require burglish.NL.js
// =require burglish.g_.js

// =require burglish.hX.js
// =require burglish.QO.js
// =require burglish.NB.js
// =require burglish.Qp.js
// =require burglish.NE.js

// =require burglish.N2.js
// =require burglish.Ki.js
// =require burglish.onFocus.js

// =require burglish.gt.js
// =require burglish.go.js
// =require burglish.gx.js

var gI = doc.onkeypress ? doc.onkeypress : function() {};
// if (!w1) doc.onkeypress = NL;

// =require burglish.gD.js
// =require burglish.gu.js
// =require burglish.hV.js

// =require burglish.ND.js
// =require burglish.gL.js
// =require burglish.NM.js
// =require burglish.Os.js
// =require burglish.gZ.js

gJ.burglish = true;