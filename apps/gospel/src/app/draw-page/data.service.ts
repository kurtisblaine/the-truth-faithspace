import { Injectable } from "@angular/core";
import { Image } from "./draw-page.component";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private images: Image[] = [];

  public init() {
    if (this.images.length) return this.images;

    this.images.push({
      id: "the-gospel",
      name: "The Gospel",
      description: `Through the Gospel the believer is saved, as he sits with Christ in heavenly places,
       so we walk in the Spirit and sow to the Spirit and stand against the wiles of the enemy;
       we endure until the end, holding fast to the Gospel which we first came to believe.
       I will call to remembrance the scripture of Ezekiel 16: what God has done for us isn't because we're so great, but because we were so helpless;
       God's grace had nothing to do with us, He gave us love unmerited; so if we boast, we boast in Christ, in His great riches and mercy which He has for us.
       We are His workmanship, made useful to the Master through His working in us, and we enter into His rest by faith.`,
      footer: "Jesus has done everything for us, and we are His work...",
      originUrl: "v1711590205/teach/gospel_cxqott.webp",
      fileName: "gospel.webp",
    });

    this.images.push({
      id: "the-covenant-promise",
      name: "The Covenant Promise",
      description: `The coveant promise is available to everyone - this is what I mean by putting 'unconditional' on the top.
        The fulfillment of the promise is Christ Jesus - He is the Yes and Amen to everyone of God's promises.
        Through the oath given by God, we enter into covenant with Him through faith as it was with our father Abraham.
        The promise is the foundation of the covenant - for it is a covenant promise - so without the proimse, there is no covenant.
        Believe the promise and enter into covenant with God, for when a promise is given, what is left except to believe?
        This is the entrance into the new covenant and the terms of the covenant - our faith.
        Christ died - and what's more? He lives on! And you overcome by your faith in Him.`,
      footer: "The promise, and the covenant founded on the promise...",
      originUrl: "v1711590185/teach/covenantpromise_lq6374.webp",
      fileName: "covenantpromise.webp",
    });

    this.images.push({
      id: "the-children-of-light",
      name: "The Children of the Day",
      description: `The Lord will come as thief to those in the night;
      but Lord and Savior, bringing salvation, to those who are of the day, to those who are watching in prayer for His coming, and standing against the wiles of the enemy of darkness.
      Stand firm against him! Watch in prayer as a watchman on the wall with the eyes of your head - watch.
      Take diligent care of your heart, for from it flow the issues of life - yes, every defiling thing comes from the heart!
      Make sure your light is truly light; "If the light in you is darkness, how great the darkness!"
      Remain in the light, as children of the day, making confession of your sins and affirming the Lord sees and knows everything - nothing is hidden from His sight.`,
      footer: "Be a child of the Day, servants of the Lord...",
      fileName: "daynight.webp",
      originUrl: "v1711590187/teach/daynight_yob9oh.webp",
    });

    this.images.push({
      id: "the-fear-of-the-lord",
      name: "The Fear of the Lord",
      description: `The fear of the Lord is wisdom. To perfect wisdom: continue to fear the LORD.
      In God's wisdom, He proclaims this is the wisest thing for us to do: fear Him.
      Ruminate, you clean ones, on the fear of the LORD. He is, was, and is yet to come.
      When He comes, He will render to each one according to his works, and He judges impartially.
      The Word of the LORD is life. He is True. All who believe in Him set their seal to this: God is true.
      Let every man be a liar. The one who does not believe, does not fear; the one who believes, fears.`,
      footer: "The fear of the Lord produces humility and a righteous hatred...",
      fileName: "fearLord.webp",
      originUrl: "v1711590197/teach/fearLord_znqj9t.webp",
    });

    this.images.push({
      id: "re-prefix",
      name: "The Re Prefix",
      description: `The prefix 'Re' means going back;
      this would mean going back to the truth and constantly remembering it.
      REmembering is to REcall the things that have happened previously.
      The signs, the feasts, the festivals, the sabbaths, the bow in the sky, the trumpet blasts - remember.
      "REmember from where you have fallen and REpent and do the deeds you did at first." (Revelation 2:5)
      Discipline is the way to life; a fool doesn't listen to wise concil, but the wise fear and take heed.
      A fool goes on his way and pays no attention to the Word; his ignorance is blissful only for a short time;
      and when it is too late, there will be no going back.`,
      footer: "Differences between these...",
      originUrl: "v1711590232/teach/re_g8fwmi.webp",
      fileName: "re.webp",
    });

    this.images.push({
      id: "sanctification-defined",
      name: "Sanctification Defined",
      description: `Sanctification defined: going from what is earthly (south, or below) to what is heavenly (north, or above);
      from what is wrong (left, west) to the right (right, or east) being sanctified;
      going from what is made with human hands, to that which is made without hands;
      from what pleases men, to what pleases God, from doing what is right in your own eyes, to what is right in God's eyes.
      Sanctification comes by the truth; "Sanctify them in the truth; Your word is truth.” (John 17:17)
      So sanctification is God's work: only believe. On the sabbath, the men rested and the priests worked and were guiltless;
      "You shall surely observe My sabbaths; for this is a sign between Me and you throughout your generations, that you may know that I am the LORD who sanctifies you.” (Exodus 31:13)`,
      footer: "Moving away from earthly things to heavenly things...",
      fileName: "sanctification.webp",
      originUrl: "v1711590244/teach/sanctification_jjdelm.webp",
    });

    this.images.push({
      id: "justification-salvation",
      name: "Justification and Salvation",
      description: `Just as the body without the spirit is dead, so faith without works is dead.
      Only living faith will save you, made possible because of the Living Sacrifice of Christ. How beautiful this truth is!
      You must be made right before you can ever do right; justification proceeds sanctification. Jesus Christ justifies us through the sacrifice of Himself;
      and if justification comes from His death, how much more will we be sanctified (and saved) by His life?
      If by His weakness we were justified, how much more will we be saved by His strength?
      If He loved us in His death, how much more in His resurrected life?
      If justification comes by faith, how much more sanctification? The new covenant: faith in Jesus Christ.`,
      footer: "Justified by Christ, Faith that saves...",
      fileName: "justificationandsalvation.webp",
      originUrl: "v1721004824/teach/justificationandsalvation_d1flk5.webp",
    });

    this.images.push({
      id: "biblical-separation",
      name: "Biblical Separation",
      description: `Discerning between the clean and the unclean, and separating from men who act like unclean animals.
      Be separate from them, and obey biblical separation for your own good, lest the wicked corrupt you and damn you.
      As Jesus said, "Let the dead go bury their dead." So their carcasses are defiling.
      What fellowship does life have with death? Light with darkness?
      Jesus Christ is the life; He spent three days among the dead, so you would part ways with sin and death.
      "Draw near unto God and He will draw near unto you; cleanse your hands you sinners and purify your hearts you double minded."
      For the closer we draw near to God, the further away our former companions will appear.`,
      footer: "When to separate from believers and unbelievers...",
      fileName: "biblicalseparation.webp",
      originUrl: "v1721004824/teach/biblicalseparation_e1udhr.webp",
    });

    this.images.push({
      id: "israels-marching-orders",
      name: "Israel's Marching Orders",
      description: `As it was when Israel was given marching orders, the same as it is today, we are led by the Spirit of God.
      All the tribes followed the pillar of cloud by day and the pillar of fire by night; the angel of the Lord was in the cloud.
      Isarel was the first church in the wilderness and an example to us in these latter days (1 Corinthians 10):
      they were all baptized in the cloud and in the sea, they ate the same spiritual bread and drank the same spiritual drink;
      how are we any different? They were led by Moses out of bondage; we are led out by Christ, the Prophet like Moses.
      They were commanded to walk orderly, in step, covered and aligned. Are our marching orders any different?`,
      footer: "How the hosts of the LORD were sent out...",
      fileName: "israelcamp.webp",
      originUrl: "v1721004824/teach/israelcamp_mrnxqw.webp",
    });

    this.images.push({
      id: "john-16",
      name: "John 16",
      description: `John 16: 8-11: If we sin, it is because we have no faith; if we do what is right, it is because we believe.
      “Commit your way to the LORD, Trust also in Him, and He will do it.
       He will bring forth your righteousness as the light And your judgment as the noonday.” (Psalms 37:5-6)
       Wait on the Lord Jesus and He will grant you righteousness through faith in Him.
       When Christ is risen up and taken away from the sons of men, then faith is made possible, since we no longer see Him.
       The ruler of this world is the one judged on the cross; Christ suffered a wound to His heel, but satan, a head wound.
      `,
      footer: "Elaborating John 16: 8-11...",
      fileName: "john16.webp",
      originUrl: "v1711590220/teach/john16_bgxtfk.webp",
    });

    // this.images.push({
    //   id: 7,
    //   name: "Earthly man and Heavenly Man",
    //   description: `This is the most beautiful and unique archetype of Christ; it is unique because Adam is an antitype of Christ!
    //   Through adam's one act of disobedience all have been made sinners and death reigned throughout all mankind. Through another Man
    //   and His one act of obedience and righteousness, has made right many who are chosen according to their conduct even in the midst of fiery tribulation.
    //   There is something not outlined on this drawing: through Christ, all will be made alive, the living and the dead, at the resurrection of the dead in the last day.
    //   There is a resurrection of the living, those who have fallen asleep in Christ; those will rise to everlasting life.`,
    //   footer:
    //     "The Scriptures referenced here are Romans 5: 12-21; 1 Corinthians 15:20-22; 1 Corinthians 15:45-49...",
    //   originUrl: "v1711590170/teach/adamvsJesus_v7kc6a.webp",
    //   fileName: "adamvsJesus.webp",

    // });

    this.images.push({
      id: "the-altar-of-christ",
      name: "The Altar of Christ",
      description: `We were crucified with Christ and made right with God through Him when He died on the cross on our behalf;
      therefore, by sanctification we pick up our cross and follow Him, just as Isaac did when he subjected himself to his father;
      he was spared of his life and is today an example of a living sacrifice. The cross is the altar of the sacrifice; for we are the sacrifice.
      So we follow Christ, and He took up His cross, the altar of Christ, and became the sacrifice for sins;
      therefore, we are living sacrifices to God, and likewise pick up our cross, following Him.`,
      footer: "Die to the flesh and its passions...",
      fileName: "alterofGod.webp",
      originUrl: "v1711590174/teach/armorofGod_h3blcr.webp",
    });

    this.images.push({
      id: "the-lion-the-lamb",
      name: "The Lion and the Lamb",
      description: `Abraham gave his one and only son, Isaac, as a sacrifice; and Jacob gave up his one and only son Benjamin, from his beloved Rachel, to go to Egypt.
      Isaac was redeemed with a ram caught in the thicket; and Benjamin was redeemed by his brother Judah, from which the Lion is to come.
      These two represent Jesus Christ, who God gave up for the sins of the world, because of His great love for us, gave up His beloved Son.
      Abraham gained back his son Isaac, and Jacob gained back his son Benjamin - not to mention he received Joseph back from the dead!
      And Jesus, God raised Him from the dead; He is the lion from the tribe of Judah and the Lamb of God who takes away the sin of the world.`,
      footer: "Similarities between Isaac and Benjamin...",
      fileName: "Jesuslionlamb.webp",
      originUrl: "v1711590217/teach/Jesuslionlamb_y91dzk.webp",
    });

    // this.images.push({
    //   id: 9,
    //   name: "The Armor of God",
    //   description: `When David went to go fight Goliath, he was given armor by Saul which did not fit him, Saul was too big and David was smaller than Saul.
    //   Anyway, David had armor on which was from God, an armor that is fitting for a man of God. The armor is for protection. What good are we if we are hurt in battle?
    //   Can we fight from the hospital bed? The war has been won by Christ on the cross, and we join into his victory through faith. This is all seen in the book of Colossians.
    //   Christ's victory is absolute, but we may be defeated. Why? Because we have not been perfected by our faith in the grace of God. We STAND on victory ground;
    //   we first most need to fight to conquer the land that God has promised us -- the battle of faith, the good fight (1 Tim 6:12).
    //   In the book of Joshua, the Israelites had to go into the land and defeat the enemy. God promised them, He would fight for them.
    //   They needed to put their faith to action and go. God will not let anyone of us down who put their trust in Him.`,
    //   footer:
    //     "The Armor given to us by God, which is fitting for a Christian, unlike the armor Saul gave to David...",
    //   originUrl: "v1711590174/teach/armorofGod_h3blcr.webp",
    //   fileName: "armorofGod.webp",

    // });

    this.images.push({
      id: "repent-and-believe",
      name: "Repent and Believe",
      description: `Repentance is turning away from our previous way, and believing is turning to God.
      No-one can believe without first repenting; no-one can turn to Christ without first turning away from evil.
      Faith is salvation. Repentance does no good unless you turn to Christ.
      How can one be safe unless they repent of dead works? Is not wrath against sin? Are they not what we need saving from?
      Christ saves: therefore, come to the knowledge of Him and be set free from sin through the truth.
      Unless you believe Jesus is He, you will die in your sins. Jesus is Lord and the Powerful one, able to save.
      Repent and Believe.`,
      footer: "The response to the Gospel: repent and believe...",
      fileName: "repentandbelieve.webp",
      originUrl: "v1711590234/teach/repentandbelieve_nq987c.webp",
    });

    this.images.push({
      id: "run-the-race",
      name: "Run the Race of Faith",
      description: `The race is from start to finish by faith; so run! Run the race of faith.
      We race for the eternal crown of life. In the days before instant messaging, runners were sent out to run with a message;
      they ran to bring a word to the king or to whomever it may concern.
      So today, we are called to run the race of faith, bearing the good news in our bosom and proclaiming to every creature under the sun.
      All men everywhere have the universal right to the gospel; whether they accept it or reject it, let it be on them, but your hands be clean.
      Bear the good news! Good men bring good news!`,
      footer: "The life of faith is running...",
      fileName: "runtherace.webp",
      originUrl: "v1711590238/teach/runtherace_pnfqmo.webp",
    });

    this.images.push({
      id: "grace-and-truth",
      name: "Grace and Truth",
      description: `The law is physical; the Gospel is spiritual; and greater is the Spirit than the flesh.
      Through the law comes a knowledge of sin; but through grace and truth come the knowledge of God.
      We have a choice: which tree to eat from. God has restored to us one command: believe.
      Enter into covenant with God through His oath of promise, fulfilled by Jesus Christ.
      He was gracious to promise with His mouth and strong enough to perform with His hand.
      The law reveals our conscience, but Christ, full of grace and truth, reveals the invisible God.`,
      footer: "The law revealed the conscience, Christ revealed grace & truth...",
      fileName: "grace&truth.webp",
      originUrl: "v1711735327/teach/grace_truth_loj0u0.webp",
    });

    this.images.push({
      id: "spiritual-worship",
      name: "Spiritual Worship",
      description: `The law gives power to pride and sin; it empowers sin within us;
      so through the law comes a false sense of worship.
      But through the Spirit, we can worship the Father as He intended: in spirit and truth.
      We give our bodies as living sacrifice which is spiritual worship - not on a set day, but everyday, offering ourselves as holy to God.
      Then we can attribute proper worth to God who makes the temple holy rather than the temple itself.
      The law honors the temple more than God who sanctifies the temple;
      everything about the law is physical; however, the Spirit trumps over the flesh;
      and our bodies are the temples where the Holy Spirit resides.`,
      footer: "How we're called to worship...",
      fileName: "TrueWorship.webp",
      originUrl: "v1711735327/teach/TrueWorship_prs84a.webp",
    });

    this.images.push({
      id: "born-of-water-and-fire",
      name: "You must be Born of Water and Fire",
      description: `The baptism of water is a baptism of repentance.
      John the Baptist was the first apostle sent by God to proclaim water baptism, confession of sin and
      repentance. He preached that men should believe in the One to come after him.
      The twelve were sent by God baptizing and making disciples after Him.
      Yet there is another baptism, a baptism of fire and of the Spirit, and it includes tribulation and refining from impurities.
      Jesus is the One who baptizes in the Holy Spirit. And we are saved (1 Peter 3:21) through water as Noah and his family were saved through the deluge;
      we are saved through the refining work of the Holy Spirit to sanctification.
      In the future when the world is judged by fire, we will be caught up in the heavens and will not perish along with the rest of the world.
      So we are saved through water and fire, we are saved from the flood of the nations and the fire of judgement.`,
      footer: "You must be born again of Water and Spirit...",
      originUrl: "v1711590176/teach/baptismwaterandfire_z41pny.webp",
      fileName: "baptismwaterandfire.webp",
    });

    this.images.push({
      id: "build-on-the-rock",
      name: "Build on the Rock",
      description: `In the end, we will not be judged based our faith, but based our actions. Our faith and actions work together.
      What good is it, to say we have faith but have no works? Can that faith help another or even save ourselves?
      Such a faith has no merit in reality and is delusional; but a faith that lives and moves and has it's being in reality, such faith is good and can save.
      We build our house upon the rock, which is obedience: how can we stand when calamity comes if we don't obey when things are good?
      Jesus Christ is the Rock. We believe in Him and follow after Him: He is the Example and He is the Way.
      Therefore, we build on the Rock.`,
      footer: "Our building will be tested...",
      fileName: "buildingontheRock.webp",
      originUrl: "v1711590180/teach/buildingontheRock_mxzsvs.webp",
    });

    this.images.push({
      id: "the-word-of-life",
      name: "The Word of Life",
      description: `We have no life unless we abide in Christ. He is so great and merciful, making Himself available to us by faith.
      We can do utterly nothing of value apart from God. If we wish to have fruit, we must be in God.
      Even the Son said, 'Why do you call Me good? Only God is good'. Our righteousness is from what we perceive our Father doing in Christ.
      Our righteousness comes from knowing the Lord Jesus and the Father God. And Jesus Christ has revealed Him to us.
      He is the Word of Life; we can taste and see now that the Lord is good. His Word is sweet, just as life is sweet, to those who obey Him;
      His Word is bitter, just as death is bitter, to those who do not obey Him. He shows Himself devious to the devious, but pure to the pure.`,
      footer: "Jesus is the Word of Life...",
      fileName: "theWordofLife.webp",
      originUrl: "v1712630408/teach/theWordofLife_qtalbz.webp",
    });

    this.images.push({
      id: "father-son-church",
      name: "The Father and the Son and the Church",
      description: `As the Father relates to the Son, the Son relates to His Church. The Son is the Mediater between us and God;
      He obeyed God perfectly. What the Father commanded the Son, so the Son commands us.
      There is one who plans and another who executes, even as it is in football: the coaches make the game plan and the players execute.
      Likewise, the Father's good plan was to send the Son into the world and so, the Son sends His disciples out to be a light into the world.
      He is our Mind and He gives us His mind through the Spirit, so that we may know the will of the Father.
      What the Father promises the Son, the Son promises the Church.`,
      footer: "As the Father relates to the Son...",
      fileName: "Father&Son.webp",
      originUrl: "v1712630408/teach/Father_Son_lbtri6.webp",
    });

    this.images.push({
      id: "new-wine-new-wineskins",
      name: "New Wine and New Wineskins",
      description: `Ah! I am like a wineskin ready to burst! The law says, "Speak not", but the Spirit says, "Speak".
      The Holy Spirit bubbles up within us - let it come from out of us! The Father has given us the mind of Christ to speak His Word.
      Any mixture is hypocrisy! New wine in old wineskins is a mixture; and mixture is impurity.
      When the outside does not match the inside, that is hypocrisy.
      All hypocrisy is leaven; and hypocrisy is sin. Walk in the truth! Beware of all hypocrisy!
      Why do you fast? Why do you pray? Why do you read?
      If it's anything other than "because the love for God", you may be in hypocrisy!
      Dwell in sincerity and keep an upright heart before God, for He sees your heart and your ways.
      Drink the new wine and forget your sins, for you have been given new wineskins.`,
      footer: "The new wine in the new wineskins...",
      fileName: "wineskins.webp",
      originUrl: "v1712630408/teach/wineskins_nkx8o9.webp",
    });

    // this.images.push({
    //   name: "Tabernacle Courtyard",
    //   description: `Everything in the tabernacle has a covering: the altar has the meat, the wash basin has water,
    //   the gold altar has incense, the table has bread, the lampstand has lamps with oil, the Ark of Testimony has it's covering of atonement.
    //   The item is static and it's covering is dynamic; even yet, the item is dynamic in a sense it has poles inserted.
    //   Even the Tent of Meeting itself has a covering: the only exception would be the courtyard, it has no covering.
    //   We also have a covering: Christ. He is the atonement, bread, water, light, sacrifice, and incense. We follow Him, doing everything He did.`,
    //   footer: "All items in the Tabernacle have a covering...",
    //   originUrl: "v1711590183/teach/courtyard_atzssw.webp",
    //   fileName: "courtyard.webp",
    // });

    this.images.push({
      id: "the-day-of-the-lord",
      name: "The Day of the Lord",
      description: `If we are of the day, we are sober, in our right mind and attentive, watchful in prayer.
      Those of the night are drunk, out of their right mind, unaware and foolish.
      The day of the Lord will come as a thief to those who are of the night;
      but to those in the Day, who are watchful in prayer and waiting for Him, it will be the Day of Salvation.
      "Wouldn't it be better", you may ask, "if the Lord told us when He was coming, so we would be ready?"
      We are to be alert at all times, expecting His coming every day;
      we may think to ourselves, "My Master is a long time in coming, I will take it easy and be merry."
      But then He will come unexpectedly, catching him off guard, assigning him to a place with the hypocrites;
      this so called wisdom is folly. Rather be ready, clothed and watching for Him.`,
      footer: "The day of the Lord like a thief...",
      fileName: "dayoftheLord.webp",
      originUrl: "v1711590189/teach/dayoftheLord_a7yocn.webp",
    });

    this.images.push({
      id: "union-with-christ",
      name: "Union with Christ: Past, Present, and Future",
      description: `We have died with Christ, crucified with Him, pinning our desires and intents of our wicked heart to the cross, putting them to death.
      By God's gift, we have received through faith a new life, having been crucified with Him and baptized in His death, buried with Him for the forgiveness of sins.
      These things are referring to the past, to our union with Christ; if we have believed, we are in Him; and if we are in Him, we were with Him.
      Our present life is living in death! Pick up your cross, removing dark deeds, and nailing them the cross.
      By the resurrection of Christ, put Him on as new clothes; we are the living sacrifice unto God, putting on also the shinning armor of righteousness, the armor of God.
      Our future is also tied up in Christ: the transformation of these lowly bodies into glorious spiritual bodies with the resurrection of the dead on the last day.
      We see that Christ's death must work in us so that His life will also be revealed in us.
      `,
      footer: "Death must work in us, so we might live...",
      fileName: "deathandlife.webp",
      originUrl: "v1711590191/teach/deathandlife_gcfidy.webp",
    });

    this.images.push({
      id: "the-spiritual-doctor",
      name: "The Spiritual Doctor",
      description: `Jesus is the Spiritual Doctor, healing people by grace through faith in His name;
      yes, even the blind were healed, having not seen Him but only heard Him.
      That means you too, without seeing Him, you can believe He is Him and be healed.
      He fixes our hearts, heals our bodies, and saves our souls from damnation: a total salvation.
      A physical doctor prescribes treatments that do not help with the root cause; but Jesus, fixes the issue through the forgiveness of sins by grace.
      Doctors poke and prod and come up with a diagnosis; but Jesus, the Creator, of the heart and body and mind knows the issue of the heart and fixes the underlying cause, deeper than a scalpel can reach.
      Our sickness is sin & Jesus circumcises our sinful nature, removing it from our spirits so that we would obey Him, writting on our hearts His law.
      The world prescribes 'Do this and don't do that' for the symptoms of sin, but they do not help with conquering sinful desires;
      but Jesus completely cuts them away in us for the love of us. Jesus said, "I have called not the righteous but sinners to repentance."
      And, "Healthy people don't need a doctor, but the sick".`,
      footer: "Healthy people do not need a doctor, the sick do...",
      originUrl: "v1711590194/teach/doctors_gtvq2g.webp",
      fileName: "doctors.webp",
    });

    this.images.push({
      id: "the-first-the-last",
      name: "The First and the Last",
      description: `The Lord Jesus has no beginning nor end, but He is the Beginning and End.
      He was last on earth, and the Father exalted Him first over all, supreme over His creation.
      He is the eldest, yet firstborn, existed from the beginning. He is the complete Word: the Alpha and the Omega.
      He lived out obedience to its full, and on His account a blessing to the whole world came about.
      He is the living Word, the Word of Life, He created all things. He was dead, but now lives forevermore!
      Since He became last of all, even His own creation, God exalted Him first over all and ruler of all His creation.
      Whatever we do unto the least of these, we do unto Him; He was with God in the beginning, but humbled Himself as a servant.`,
      footer: "Jesus was last but now first...",
      fileName: "firstandlast.webp",
      originUrl: "v1711590199/teach/firstandlast_qvzmdt.webp",
    });

    // this.images.push({
    //   name: "The Flesh: lust & pride",
    //   description: ``,
    //   footer:
    //     "There is sin of the flesh & also of the soul, which contains the mind...",
    //   fileName: "flesh.webp",
    //   originUrl: "v1711590202/teach/flesh_izazns.webp",
    // });

    this.images.push({
      id: "the-harvest-in-the-end",
      name: "The Harvest in the End",
      description: `Jesus is the first to rise from the dead as first fruits to God.
      Just how God makes the crop grow shows us how the resurrection occurs. First the seed in the soil dies,
      then it springs up in a new kind of glory, which was not like the last. It is planted in the ground and dies,
      then sprouts up with new life. The crop brought before the LORD at the Festival of Firstfruits symbolizes this,
      and points to Jesus Christ who is the firstfruits of the harvest - the first to rise from the dead.`,
      footer: "All things created by Him and for Him...",
      fileName: "harvest.webp",
      originUrl: "v1711590208/teach/harvest_tncb4h.webp",
    });

    this.images.push({
      id: "israelite-camp",
      name: "Israelite Camp",
      description: `The materials which are more rare are more holy, just as gold is more rare than silver and esteemed more highly;
      and in that lies a distinguishing mark of holiness - rarety; for what is common, or not holy, is something that's in abundance.
      Gold is esteemed holy among the children of men because it is not often found.
      Likewise, Israel was a holy jewel in the wilderness who dwelt separate from the other nations.
      The Spirit of the Lord shows us that anyone who builds a house for the Lord must do so through wisdom.
      Solomon, who was filled with wisdom, built the temple of the Lord; and Bazadel and Oholiab were filled with the Spirit to build the Tabernacle.`,
      footer: "Parables through the creation of the Tabernacle...",
      fileName: "israelitecamp.webp",
      originUrl: "v1711590211/teach/israelitecamp_iuepsc.webp",
    });

    this.images.push({
      id: "impartial-judgement",
      name: "Impartial Judgement",
      description: `Before each judgment are a series of events: a gathering of nations, thrones setup, dead raised (or those who have fallen asleep in the Lord),
      and judgment. In the Revelation given to John, you will see these things in common between both judgements of the righteous and the wicked.
      There are two judgements just as there are two resurrections. Blessed are those who take part in the first resurrection, for the second death holds no power over them!
      In our flesh our eyes will see Him, we will awake and see the Lord.`,
      footer: "Two resurrections...",
      fileName: "judgementday.webp",
      originUrl: "v1711590223/teach/judgementday_pfgryw.webp",
    });

    this.images.push({
      id: "the-four-soils",
      name: "The Four Soils",
      description: `There are four soils the Lord spoke about; there are also four different soils the nation of Israel were in.
      There is one soil which is good soil and fruitful: this represents the land of promise.
      The other three soils were unfruitful, same with the three soils Israel were in throughout history.
      The wilderness represents the seed that was scorched and had no root. The thorns would relate to the land of Exile, where the seed was choked out.
      I would consider the land of bondage and slavery, Egypt, the rocky soil, where the birds ate up the seed, since oppression comes from the evil one.`,
      footer: "Which soil are you...",
      fileName: "land.webp",
      originUrl: "v1711590225/teach/land_wvithb.webp",
    });

    this.images.push({
      id: "one-god",
      name: "One God",
      description: `There is one God and one Mediator between God and man: Christ Jesus.
      `,
      footer: "One God all in all...",
      fileName: "oneGod.webp",
      originUrl: "v1711590229/teach/oneGod_vv0hh8.webp",
    });

    this.images.push({
      id: "eternal-life",
      name: "Eternal Life: Cultivation",
      description: `Cultivating the soil and planting seeds would be repentance and confession of sins and being baptized in water.
      The miracle of God is passing through death and yet remaining alive like Israel passing through the Red Sea.
      Jesus mentioned, "Baptized with Spirit and Fire..." This is the harvesting to eternal life and suffering.`,
      footer: "The seed must first be planted on fertile soil then by a miracle of God...",
      fileName: "salvation.webp",
      originUrl: "v1711590242/teach/salvation_piunap.webp",
    });

    this.images.push({
      id: "sayings-and-commands",
      name: "Trustworthy Sayings & Solemn Commands",
      description: `There are trustworthy saying Paul gave Timothy and Titus; also there are commands he charged them with.`,
      footer: "In the personal letters to Titus and Timothy, Paul gives sayings and commands...",
      fileName: "sayingsandcommands.webp",
      originUrl: "v1711590247/teach/sayingsandcommands_xuhgyh.webp",
    });

    this.images.push({
      id: "opposing-wills",
      name: "Opposing Wills",
      description: `We are in the middle of two conflicting wills: who's will will we conform to?
      Satan's will is a lie, which result is in sin, to death; God's will is obedience unto righteousness, which results in holiness, to eternal life.
      We should chose eternal life. If we hate ourselves, we will continue to please ourselves in sin.
      We're all born into sin through Adam; but in Christ, we've been made new. Cross over into life through Jesus Christ.`,
      footer: "We are in the middle of a battle of two opposite wills, natures, and kingdoms...",
      fileName: "sinvswillofGod.webp",
      originUrl: "v1711590252/teach/sinvswillofGod_qwzj8a.webp",
    });

    this.images.push({
      id: "slaves-or-sons",
      name: "Slaves to Sin or Sons to Righteousness",
      description: `Jews are born of God by faith and Gentiles through faith. This distinction is made for a reason.
      Sons are those who are born of the Father; a slave is one who is not born of Him, but is put to forced labor.
      These who are slaves think they must work for God's approval; with this mindset, there is always sin.
      We cannot always do what we're supposed to. A son is one through grace by faith.
      Just as we have obtained our natural birth by not doing, so it is with our spiritual birth.
      We are made sons of God by faith in the son of God: Jesus Christ.`,
      footer:
        "We either get what we deserve by our works or what we don't, by God's grace, through our faith in Christ...",
      originUrl: "v1711590253/teach/slavesvssons_g5zfi7.webp",
      fileName: "slavesvssons.webp",
    });

    this.images.push({
      id: "our-jobs",
      name: "Our Jobs: Soldier, Athlete, Farmer, & Fishermen",
      description: `We learn things by the things we know. You know at least one of these things.
      How blessed is this truth! May the Holy Spirit shine light into these things for you.`,
      footer: "If you've always wanted to be in the military, now you can as soldiers of Christ Jesus...",
      originUrl: "v1711590258/teach/soldierathletefarmerfishermen_ebpnk9.webp",
      fileName: "soldierathletefarmerfishermen.webp",
    });

    this.images.push({
      id: "the-place-of-meeting",
      name: "The Place of Meeting: Tabernacle",
      description: `The inner sancturary is where God abodes. This corresponds to our heart.
      We are the temple of the living God: our body and also, all members of the Body collectively.
      God's temple is holy. So should we be. The law is written on our hearts, just as the tablets are in the ark.
      These bodies of ours are temporary. Our tent will be taken down. This represents all the poles that were inserted in the items.
      See drawing for more on these things...`,
      footer: "We have fellowship with God in the place of meeting, we abide in Him and He in us...",
      originUrl: "v1711590262/teach/Tabernacle_bdapzh.webp",
      fileName: "Tabernacle.webp",
    });

    this.images.push({
      id: "tester-of-metals",
      name: "Tester of Metals",
      description: `It is a blessing to be tried by a prophet of God in this day.
      If we cannot withstand his judgment, how can we withstand the All Mighty Judge when we stand before Him?
      This is God's grace for us. We should repent and do as the prophet Jeremiah says and all the other prophets.
      They come to test the quality of us: they do so, so that we wouldn't be ultimately judged in the end with everlasting fire.`,
      footer: "There is tribulation and fire we will all be salted with just as a sacrifice is, will we overcome...",
      originUrl: "v1711590265/teach/testerofmetals_dazuwl.webp",
      fileName: "testerofmetals.webp",
    });

    this.images.push({
      id: "the-church",
      name: "The Church",
      description: `A type of Jesus Christ and the Church. The woman's head is Adam, that means she is the body.
      Christ is our head, that means we are the Body: the church.
      We, the church, are brought forth out of Christ's broken body as His body; just as Eve was created out of Adam's body and is his body.`,
      footer: "We are one with Christ as Eve was one with Adam...",
      fileName: "thechurch.webp",
      originUrl: "v1711590268/teach/thechurch_n6uhvl.webp",
    });

    this.images.push({
      id: "the-law-of-liberty",
      name: "The Law of Liberty",
      description: `The law of God is used correctly and incorrectly. For one, it is for the godless.
      It is there to convict. It is there to show us sin. It is there as a guardian for us (until the way of Christ is revealed).
      It is not a means to righteousness. It is not given for us to strict obedience to it, as the Parisees, while neglecting the inward heart of the matter.
      Surely, we obey the law, but only can we through Jesus Christ and the new creation.`,
      footer: "Those who do what is right have no need to fear the authorities...",
      fileName: "theLaw.webp",
      originUrl: "v1711590271/teach/theLaw_xtsiev.webp",
    });

    this.images.push({
      id: "the-way",
      name: "The Way of the Spirit: Walk and Run",
      description: `Whatever we set our minds on, is that which we will walk in. First the head, then the body.
      We must set our minds on the things above! This is the way of the Spirit.
      Setting our minds on earthly things, we will surely follow earthly things, living according to the flesh.
      Walking is living step by step, running is the same thing, but with eagarness.`,
      footer: "What are we rushing for will reveal what we are eagar for...",
      fileName: "theway.webp",
      originUrl: "v1711590274/teach/theway_hywb5a.webp",
    });

    this.images.push({
      id: "thieves-bandits",
      name: "Thieves and Bandits",
      description: `Ah my favorite! I love this! Thieves are the hypocrites! Bandits are they who acknowledge they're sinners.
      The bandit sins outwardly, he is the one Christ has come for! He comes for they who know they are sinners.
      They who think they are righteous are hypocrites: inwardly defiled and outwardly clean. He rebuked them sharply. Evil is evil, but it is better to be a bandit than a thief.
      A thief only feels shame when he gets caught! Be a bandit, and be primed for Christ Jesus!`,
      footer: "Some wear their sin on the inside and others on the outside, yet all are with sin...",
      fileName: "thievesbandits.webp",
      originUrl: "v1711590277/teach/thievesbandits_ybigmc.webp",
    });

    this.images.push({
      id: "detest-delight",
      name: "Detests vs Delights",
      description: `All falsehood the Lord God hates. Hypocrisy: sacrifices offered with an impure heart.
      He loves truth and mercy and humility. He looks at the heart; and He sees the heart is decietfully wicked always.`,
      footer: "What the Most High detests and what is a delight to Him...",
      fileName: "detestvsdelight.webp",
      originUrl: "v1711735328/teach/detestvsdelight_h4xby0.webp",
    });

    this.images.push({
      id: "the-father-son-spirit",
      name: "The Father and the Son and the Holy Spirit",
      description: `The Father and the Son and the Spirit are equal. Many great men came from God: Samson, John the Baptist, Moses, David, etc.
      They all exemplify an attribute of Christ and prophesy with their lives and word to Christ; but they all stumbled in some way.
      How much greater is Christ Jesus, who is the accumluation of all these attributes of all these men, having given them their lives and character, who is also without sin.
      How great is He! How much greater is He whom He testified to, "For the Father is greater than I" who no man has seen at anytime except the Son who has revealed Him to us.`,
      footer: "Revelation about the Father, Son, and the Spirit.. how we worship one God.",
      fileName: "theFatherSonSpirit.webp",
      originUrl: "v1711735327/teach/theFatherSonSpirit_cv11oq.webp",
    });

    this.images.push({
      id: "the-father-the-son",
      name: "The Father and the Son",
      description: `A contrast between the Father and the Son. "Like Father like son", is a proverb we know well of.
      Jesus Christ is the perfect Son, doing everything the Father told Him to do and say. He is our Mediator between us and God.
      We can only come to the Father through Him; any other way will not work. Only through Christ do we have access to the Father.
      Our prayers are to the Father.`,
      footer: "Scripture gathering of the Father and the Son...",
      fileName: "theFather&theSon.webp",
      originUrl: "v1711735329/teach/theFather_theSon_d2ax76.webp",
    });

    this.images.push({
      id: "not-inherit-the-kingdom-verse",
      name: "Will Not inherit the Kingdom (verses)",
      description: `Test yourself to see if any of these apply to you. Only the new creation can inherit the new heaven and the new earth.
      Unless you receive the kingdom like a little child you will by no means enter into it.
      We ought to prove ourselves worthy, picking up our cross and following Him; we ought to love the Lord with an undying love.
      `,
      footer: "These will not inherit the Kingdom...",
      fileName: "willnotinherit.webp",
      originUrl: "v1711735327/teach/willnotinherit_n0mujj.webp",
    });

    this.images.push({
      id: "inherit-the-kingdom-verse",
      name: "Will Inherit the Kingdom (verses)",
      description: `Only the new creation will inherit all these things.
      Those who are sons of God have been given the Spirit of the Son; and if we be sons, we also be hiers of the kingdom of the Father.
      All things belong to us in Christ, and we belong to Christ, and Christ belongs to God.
      Corruption cannot inherit incorruption; therefore, we must be born again. We are born again through the Word of Truth.
      Our faith calls us to be holy; the holy in body and spirit do these things.`,
      footer: "These WILL inherit the Kingdom...",
      fileName: "willinheritverses.webp",
      originUrl: "v1711735327/teach/willnotinheritverses_vzafs5.webp",
    });

    this.images.push({
      id: "inherit-the-kingdom",
      name: "Will Inherit the Kingdom (grouping)",
      description: `Oh, the purity of the gospel! Being content is thankfulness, purity is speaking truth, and morality is the righteousness by faith.
      What does God ask from us, but what He does for us?
      He makes us thankful for His grace, He saves us by His truth, and He makes us righteous by faith in Him!
      Oh, how perfect and beautiful is the Lord, my God! How righteous and holy is He! Give thanks to the Lord for His thankfulness! Sing His praise!
      Confess Him among the gentiles, and speak truth in love to your neighbor.`,
      footer: "These WILL inherit the Kingdom...",
      fileName: "willinheritbucket.webp",
      originUrl: "v1711735327/teach/willinheritbucket_fx9boh.webp",
    });

    this.images.push({
      id: "not-inherit-the-kingdom",
      name: "Will not Inherit the Kingdom of God (grouping)",
      description: `Covetousness comes from unthankfulness, such a one desires and lusts after other's possessions.
      All coveteousness is idolatry, a worshipper of the things of this world. No idolaters will inherit the kingdom of God.
      And impurity comes from falsehood, from the mouth comes this defilement; everything spoken comes from the heart, and from it come the issues of life.
      And sin comes from not believing in Christ. Believe in God, loved ones. If we believe in Him, we will not sin.`,
      footer: "These WILL NOT inherit the Kingdom...",
      fileName: "willnotinheritbucket.webp",
      originUrl: "v1712630408/teach/willnotinheritbucket_l3vyi1.webp",
    });

    return this.images.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
}
