let originalSum = 15;
let _15tip = 0.15;
let _20tip = 0.2;
let total;


switch (true) {
    case (originalSum > 50 && originalSum < 300):
        total = originalSum + originalSum * _15tip;
        console.log(`Suma totala este ${total}, cu nota de ${originalSum} si bacsisul de ${originalSum * _15tip}`);
    break;
    default:
        total = originalSum + originalSum * _20tip;
        console.log(`Suma totala este ${total}, cu nota de ${originalSum} si bacsisul de ${originalSum * _20tip}`)
}

//Nu stiu unde altundeva sa scriu asta, dar am presimtirea ca "switch" breaks cand folosim <= sau => dar merge ok cu < si >
