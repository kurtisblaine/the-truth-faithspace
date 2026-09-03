import { BookDateRange, Tag } from "./items/items.models";
import { ItemEntity } from "./items/items.reducer";

export const itemsRows: ItemEntity[] = [
  {
    title: "Elisha's Grave",
    description:
      "Baptism is symbolic of burial. Just as the deceased man who was cast into Elisha's grave rose from the dead, so everyone who is baptised into Christ is also raised up with Him through faith.",
    prophesy: `Elisha died, and they buried him. Now the bands of the Moabites would invade the land in the spring of the year. As they were burying a man, behold, they saw a marauding band; and they cast the man into the grave of Elisha. And when the man touched the bones of Elisha he revived and stood up on his feet." (2 Kings 13:20-21)`,
    fulfillments: [
      `Therefore we have been buried with Him through baptism into death, so that as Christ was raised from the dead through the glory of the Father, so we too might walk in newness of life." (Romans 6:4)`,
      `(...) having been buried with Him in baptism, in which you were also raised up with Him through faith in the working of God, who raised Him from the dead." (Colossians 2:12)`,
    ],
    tags: [Tag.JesusResurrection, Tag.ImplicitType, Tag.Baptism],
  },
  {
    title: "The World's Creation",
    description:
      "Jesus Christ is the Word in the beginning by which God created the whole world, visiable and invisible. And He creates us anew by the very same word and our faith in Jesus Christ, the Word of Life.",
    prophesy:
      "In the beginning God created the heavens and the earth. (...) Then God said, (...) and there was light. (...) Then God said, (...) and it was so. (...) Then God said, (...) and it was so. (...) Then God said, (...) and it was so. (...) Then God said, (...) and it was so. Then God said, (...) and it was so. God saw all that He had made, and behold, it was very good. And there was evening and there was morning, the sixth day.” (Genesis 1:1-17)",
    fulfillments: [
      `In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things came into being through Him, and apart from Him nothing came into being that has come into being.” (John 1:1-3)`,
      `He was in the world, and the world was made through Him, and the world did not know Him.” (John 1:10)`,
      `And the Word became flesh, and dwelt among us, and we saw His glory, glory as of the only begotten from the Father, full of grace and truth.” (John 1:14)`,
      `He is the image of the invisible God, the firstborn of all creation. For by Him all things were created, both in the heavens and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things have been created through Him and for Him. He is before all things, and in Him all things hold together.” (Colossians 1:15-17)`,
    ],
    tags: [Tag.JesusDeity, Tag.TheNewBirth],
  },
  {
    title: "Jesus Christ is the Sabbath",
    description:
      "Just as God created the world in six days and rested on the Seventh, and hallowed it, so Jesus Christ finished the work of salvation on the cross, and God raised Him from the dead and seated Him at His right hand. And in Him is found rest from our works, sanctification, and eternal life.",
    prophesy:
      "By the seventh day God completed His work which He had done, and He rested on the seventh day from all His work which He had done. Then God blessed the seventh day and sanctified it, because in it He rested from all His work which God had created and made.” (Genesis 2:2-3)",
    fulfillments: [
      `Therefore when Jesus had received the sour wine, He said, "It is finished!" And He bowed His head and gave up His spirit.” (John 19:30)`,
      `But from now on THE SON OF MAN WILL BE SEATED AT THE RIGHT HAND of the power OF GOD." (Luke 22:69)`,
      `There remains a Sabbath rest for the people of God. For the one who has entered His rest has himself also rested from his works, as God did from His.” (Hebrews 4:9-10)`,
      `We who have believed enter that rest, just as He has said, "AS I SWORE IN MY WRATH, THEY SHALL NOT ENTER MY REST," although His works were finished from the foundation of the world.” (Hebrews 4:3)`,
      `For in Him all the fullness of Deity dwells in bodily form, and in Him you have been made complete, and He is the head over all rule and authority;” (Colossians 2:9-10)`,
      `To the church of God which is at Corinth, to those who have been sanctified in Christ Jesus (...)” (1 Corinthians 1:2)`,
    ],
    tags: [Tag.Faith, Tag.JesusType],
  },
  // { title: "Mark 1:2", description: "testing", prophesy: "", fulfillments: [], tags: [Tag.JesusResurrection] },
];

export const bookDateRanges: BookDateRange[] = [
  //Pentateuch (Torah)
  { book: "Genesis", range: "1446-1406 B.C." },
  { book: "Exodus", range: "1446-1406 B.C." },
  { book: "Leviticus", range: "1446-1406 B.C." },
  { book: "Numbers", range: "1446-1406 B.C." },
  { book: "Deuteronomy", range: "1446-1406 B.C." },
  //Historical Books
  { book: "Joshua", range: "1400-1370 B.C." },
  { book: "Judges", range: "1045-1000 B.C." },
  { book: "Ruth", range: "1011-931 B.C." },
  { book: "1 Samuel", range: "930-722 B.C." },
  { book: "2 Samuel", range: "930-722 B.C." },
  { book: "1 Kings", range: "560-540 B.C." },
  { book: "2 Kings", range: "560-540 B.C." },
  { book: "1 Chronicles", range: "450-425 B.C." },
  { book: "2 Chronicles", range: "450-425 B.C." },
  { book: "Ezra", range: "440-430 B.C." },
  { book: "Nehemiah", range: "430-400 B.C." },
  { book: "Esther", range: "400 B.C." },
  //Wisdom
  { book: "Job", range: "second millennium to fifth centruy B.C." },
  { book: "Psalms", range: "400 B.C." },
  { book: "Proverbs", range: "400 B.C." },
  { book: "Ecclesiastes", range: "400 B.C." },
  { book: "Song of Solomon", range: "400 B.C." },
  //Prophets
  { book: "Isaiah", range: "400 B.C." },
  { book: "Jeremiah", range: "400 B.C." },
  { book: "Lamentations", range: "400 B.C." },
  { book: "Ezekiel", range: "400 B.C." },
  { book: "Daniel", range: "400 B.C." },
  { book: "Hosea", range: "400 B.C." },
  { book: "Joel", range: "400 B.C." },
  { book: "Amos", range: "400 B.C." },
  { book: "Obadiah", range: "400 B.C." },
  { book: "Jonah", range: "400 B.C." },
  { book: "Micah", range: "400 B.C." },
  { book: "Nahum", range: "400 B.C." },
  { book: "Habakkuk", range: "400 B.C." },
  { book: "Zephaniah", range: "400 B.C." },
  { book: "Haggai", range: "400 B.C." },
  { book: "Zechariah", range: "400 B.C." },
  { book: "Malachi", range: "400 B.C." },
];
