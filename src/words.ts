// å

const words = [
  ["fösta", "première"],
  ["andra", "deuxième"],
  ["tredje", "troisième"],
  ["fjärde", "quatrième"],
  ["femte", "cinquième"],
  ["sjätte", "sixième"],
  ["sjunde", "sixième"],
  ["åttonde", "huitième"],
  ["nionde", "neuvième"],
  ["tionde", "dixième"],
  ["elfte", "onzième"],
  // ["ett", "1"],
  // ["två", "2"],
  // ["tre", "3"],
  // ["fyra", "4"],
  // ["fem", "5"],
  // ["sex", "6"],
  // ["sju", "7"],
  // ["åtta", "8"],
  // ["nio", "9"],
  // ["tio", "10"],
  // ["elva", "11"],
  // ["tolv", "12"],
  // ["tretton", "13"],
  // ["fjortton", "14"],
  // ["femton", "15"],
  // ["sexton", "16"],
  // ["sjutton", "17"],
  // ["arton", "18"],
  // ["nitton", "19"],
  // ["tjugou", "20"],
  // ["tjugoett", "21"],
  // ["tjugotvå", "22"],
  // ["tjugotre", "23"],
  // ["tjugofyra", "24"],
  // ["tjugofem", "25"],
  // ["tjugosex", "26"],
  // ["tjugosju", "27"],
  // ["tjugoåtta", "28"],
  // ["tjugonio", "29"],
  // ["trettio", "30"],
  // ["trettioett", "31"],
  // ["trettiotvå", "32"],
  // ["trettiotre", "33"],
  // ["trettiofyra", "34"],
  // ["trettiofem", "35"],
  // ["trettiosex", "36"],
  // ["trettiosju", "37"],
  // ["trettioåtta", "38"],
  // ["trettionio", "39"],
  // ["fyrtio", "40"],
  // ["fyrtioett", "41"],
  // ["furtiotvå", "42"],
  // ["furtiotre", "43"],
  // ["furtiofyra", "44"],
  // ["furtiofem", "45"],
  // ["furtiosex", "46"],
  // ["furtiosju", "47"],
  // ["furtioåtta", "48"],
  // ["furtionio", "49"],
  // ["femtio", "50"],
  // ["femtioett", "51"],
  // ["femtiotvå", "52"],
  // ["femtiotre", "53"],
  // ["femtiofyra", "54"],
  // ["femtiofem", "55"],
  // ["femtiosex", "56"],
  // ["femtiosju", "57"],
  // ["femtioåtta", "58"],
  // ["femtionio", "59"],
  // ["sextio", "60"],
  // ["sextioett", "61"],
  // ["sextiotvå", "62"],
  // ["sextiotre", "63"],
  // ["sextiofyra", "64"],
  // ["sextiofem", "65"],
  // ["sextiosex", "66"],
  // ["sextiosju", "67"],
  // ["sextioåtta", "68"],
  // ["sextionio", "69"],
  // ["sjuttio", "70"],
  // ["sjuttioett", "71"],
  // ["sjuttiotvå", "72"],
  // ["sjuttiotre", "73"],
  // ["sjuttiofyra", "74"],
  // ["sjuttiofem", "75"],
  // ["sjuttiosex", "76"],
  // ["sjuttiosju", "77"],
  // ["sjuttioåtta", "78"],
  // ["sjuttionio", "79"],
  // lesson 1
  ["lektionen", "leçon"],
  ["bra bättre bäst", "bien"],
  ["du", "tu"],
  ["fråg/a -an -or", "question"],
  ["fröken", "mademoiselle/maîtresse"],
  ["ha (hava) -r -de -haft", "avoir"],
  ["hej", "bonjour"],
  ["hur", "comment"],
  ["idag", "aujourd'hui"],
  ["men", "mais"],
  ["må -r -dde -tt", "aller (se porter)"],
  ["tack", "merci"],

  // lesson 2
  ["då", "alors"],
  ["gift", "marié(e)"],
  ["heta/a -er hette hetat", "s'appeler"],
  ["igår", "hier"],
  ["ja", "oui"],
  ["lilla (liten)", "petit"],
  ["som", "comme"],
  ["vara är var varit", "être"],
  ["varför", "pourquoi"],
  ["viktig", "important"],
  ["tredge", "troisième"],
  ["morgon", "matin"],
  ["imorgon", "demain"],

  // lesson 3
  ["dag", "jour/journée"],
  ["det", "ça ce"],
  ["dig (deg)", "toi"],
  ["god gottgoda", "bon"],
  ["god morgon", "bonjour(matin)"],
  ["goddag", "bonjour (formel)"],
  ["grej -en -er", "machin truc"],
  ["går", "hier"],
  ["hon", "elle"],
  ["inte", "ne... pas"],
  ["jätt/e -ar -en", "géant archi vachement"],
  ["jättebra", "super"],
  ["jättelitten", "minuscule"],
  ["jätteviktig", "archi-important"],
  ["kär", "amoureux"],
  ["morgon -en mor(g)nar", "matiné"],
  ["sov/a -er sov sovit", "dormir"],
  ["vad", "comment, que, quoi, combien, qu'est-ce que, ce que"],
  ["vilken vilket vilka", "quel quelle quels quelles"],
  ["äta äter åt ätit", "manger"],

  // lesson 4
  ["alltså", "donc"],
  ["diska -r -de -t", "vaiselle (faire la)"],
  ["dusch -en -ar", "douche"],
  ["där", "là-bas"],
  ["hallå", "allo"],
  ["han", "il"],
  ["hej då", "salut (au revoir)"],
  ["komma kommer kom kommit", "arriver venir"],
  ["mustasch -en -en", "moustache"],
  ["nej", "non"],
  ["nisch", "niche"],
  ["och", "et"],
  ["okej", "ok"],
  ["ring/a -er -de -t", "sonner téléphoner"],
  ["telefon -en -er", "téléphone"],
  ["tjänare", "salut (serviteur)"],
  ["älskling", "chéri/e"],

  // lesson 5
  ["ett", "un/e"],
  ["glas -et", "verre"],
  ["kosta -r -de -t", "coûter"],
  ["kött -et", "viande"],
  ["lax -en -ar", "saumon"],
  ["mjölk -en", "lait"],
  ["skiv/a -an -or", "tranche"],
  ["skort/a -an -or", "chemise"],
  ["vin -et -er", "vin"],

  // lesson 6
  ["de", "elles ils"],
  ["framsteg -er", "progrès"],
  ["göra gör gjorde gjort", "faire"],
  ["lätt", "facile léger simple"],
  ["metod -en -ar", "méthode"],
  ["plätt -en -ar", "crêpe (petite)"],
  ["precis (adv.)", "exactement"],
  ["svenska", "suédois"],
  ["tala -r -de -t", "parler"],
  ["uttal -et", "prononciation"],
  ["uttala -r -de -t", "prononcer"],
  ["varje", "chaque"],
  ["för", "pour"],
  ["maten", "nourriture"],

  // lesson 8
  ["banta -r -de -t", "faire un régime"],
  ["något", "quelque-chose"],
  ["bröd -et", "pain"],
  ["utan", "sans"],
  ["smör -et", "beurre"],
  ["skink/a -an -or", "jambon"],
  ["jättegott", "super bon"],
  ["billigt", "pas cher"],
  ["veta vet vissta vetat", "savoir"],

  // lesson 9
  ["fästmö -n -r", "fiancée"],
  ["hans", "sa (à lui) / le sien / la sienne / les siennes ses son"],
  ["i", "dans à"],
  [
    "min / mitt / mina",
    "mon / ma / mes / le mien / la mienne / les miennes / à moi",
  ],
  ["mö -n -r", "jeune fille"],
  ["otur -en", "malchance"],
  ["puck/el -eln -lar", "bosse"],
  ["puckelrygg (ha)", "bosse (avoir) bossu (être)"],
  ["rygg -en -ar", "dos"],
  ["syst/er -ern -ar", "soeur"],
  ["tur -en", "chance"],
  ["ännu", "encore"],

  // lesson 10
  ["alltid", "toujours"],
  ["diskmaskin", "lave-vaiselle"],
  ["efter", "après"],
  ["eller", "ou"],
  ["yo", "si"],
  ["köp/a -er -te -t", "acheter"],
  ["lång längre längst", "long"],
  ["maskin -er -en", "machine"],
  ["mat -en", "repas"],
  ["middag -en -ar", "dîner"],
  ["mätt", "rassasié"],
  ["nu", "maintenant"],
  ["speciell", "spécial"],
  ["speciellt", "particulièrement spécialement surtout"],
  ["trött", "fatigué"],
  ["vem", "qui"],

  // lesson 11
  ["ge (giva) -r gav givit", "donner "],
  ["här", "ic"],
  ["inne", "dedans intérieur"],
  ["ljus", "blond clair"],
  ["mig", "me moi moi(à ~)"],
  ["mörk", "brun foncé"],
  ["otålig", "impatient"],
  ["på", "en"],
  ["röd rött röda", "rouge"],
  ["stick/a stack stuckit", "ficher le camp"],
  ["stor större störst", "grand"],
  ["ställe -t -n", "endroit place"],
  ["terass -en -er ", "terrasse"],
  ["tålig", "patient"],
  ["törstig", "assoiffé"],
  ["ute", "dehors"],
  ["vit", "blanc"],
  ["öl -en", "bière (chope)"],
  ["öl -et", "bière (boisson)"],

  // lesson 12
  ["aldrig", "jamais (ne ~)"],
  ["dansa -r -de -t", "danser"],
  [
    "din / ditt / dina ",
    "ton / test / vos / le tiens / les tiens / la vôtre / le vôtre /les vôtres",
  ],
  ["diskjockey -n -er ou -s", "disc-jockey"],
  ["diskotet -et=", "discothèque"],
  ["ensam ensamt ensamma", "seul"],
  ["gå -r gick gått", "aller aller à pied marcher"],
  ["gärna", "aimber (bien) volontiers"],
  ["hem hemmet", "chez-soi foyer"],
  ["hemkär", "casanier"],
  ["hund -en -ar", "chien"],
  ["lördag -en -ar", "samedi"],
  ["man mannen män", "homme mari"],
  ["säng -er -ar", "lit"],
  ["väldig", "énorme puissant"],
  ["väldigt", "énormément rudement très"],
];

export default words;
