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
  ["ett", "un/e"],
  ["glas -et", "verre"],
  ["kosta -r -de -t", "coûter"],
  ["kött -et", "viande"],
  ["lax -en -ar", "saumon"],
  ["mjölk -en", "lait"],
  ["skiv/a -an -or", "tranche"],
  ["skort/a -an -or", "chemise"],
  ["vin -et -er", "vin"],
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
  ["banta -r -de -t", "faire un régime"],
  ["något", "quelque-chose"],
  ["bröd -et", "pain"],
  ["utan", "sans"],
  ["smör -et", "beurre"],
  ["skink/a -an -or", "jambon"],
  ["jättegott", "super bon"],
  ["billigt", "pas cher"],
  ["veta vet vissta vetat", "savoir"],
  ["fästmö -n -r", "fiancée"],
  ["hans", "sa (à lui) / le sien / la sienne / les siennes ses son"],
  ["i", "dans"],
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
];

export default words;
