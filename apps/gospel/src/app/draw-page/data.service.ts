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
      originUrl: "q_auto/f_auto/v1711590205/teach/gospel_cxqott.webp",
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
      originUrl: "q_auto/f_auto/v1711590185/teach/covenantpromise_lq6374.webp",
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
      originUrl: "q_auto/f_auto/v1711590187/teach/daynight_yob9oh.webp",
    });

    this.images.push({
      id: "the-fear-of-the-lord",
      name: "The Fear of the Lord",
      description: `The fear of the Lord is wisdom. To perfect wisdom: continue to fear the LORD.
      In God's wisdom, He proclaims this is the wisest thing for us to do: fear Him.
      Ruminate, you clean ones, on the fear of the LORD. He is, was, and is yet to come.
      When He comes, He will render to each one according to his works, and He judges impartially.
      The Word of the LORD is life. He is True. All who believe in Him set their seal to this: God is true.
      Let every man be a liar. The one who does not believe, does not fear; the one who believes, fears the Lord.
      The one who is perfected in love has no reason to fear, for fear has to do with punishment.`,
      footer: "The fear of the Lord produces humility and a righteous hatred...",
      fileName: "fearLord.webp",
      originUrl: "q_auto/f_auto/v1711590197/teach/fearLord_znqj9t.webp",
    });

    this.images.push({
      id: "re-prefix",
      name: "The Re Prefix",
      description: `The prefix 'Re' means going back;
      this would mean going back to the truth and constantly remembering it.
      We are forgetful, that is why we are reproved or rebuked.
      REmembering is to REcall the things that have happened previously.
      The signs, the feasts, the festivals, the sabbaths, the bow in the sky, circumcision, the trumpet blasts
      - all these were given as REminders.
      "REmember from where you have fallen and REpent and do the deeds you did at first." (Revelation 2:5)
      Discipline is the way to life; a fool doesn't listen to wise concil, but the wise fear and take heed.
      A fool goes on his way and pays no attention to the Word; his ignorance is blissful for only a short time;
      and when it is too late, there will be no going back.`,
      footer: "Differences between these...",
      originUrl: "q_auto/f_auto/v1711590232/teach/re_g8fwmi.webp",
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
      originUrl: "q_auto/f_auto/v1711590244/teach/sanctification_jjdelm.webp",
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
      originUrl: "q_auto/f_auto/v1721004824/teach/justificationandsalvation_d1flk5.webp",
    });

    this.images.push({
      id: "biblical-separation",
      name: "Biblical Separation",
      description: `Discerning between the clean and the unclean, and separating from men who act like unclean animals.
      Be separate from them, and obey biblical separation for your own good, lest the wicked corrupt you and damn you.
      Jesus said, "Let the dead go bury their dead." So their carcasses are defiling.
      What fellowship does life have with death? Light with darkness?
      Jesus Christ is the life; He spent three days among the dead, so you would part ways with sin and death.
      "Draw near unto God and He will draw near unto you; cleanse your hands you sinners and purify your hearts you double minded."
      For the closer we draw to God, the further away our former companions will be.
      Stay away from any so called brother who walks in the ways of death.`,
      footer: "When to separate from believers and unbelievers...",
      fileName: "biblicalseparation.webp",
      originUrl: "q_auto/f_auto/v1721004824/teach/biblicalseparation_e1udhr.webp",
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
      originUrl: "q_auto/f_auto/v1721004824/teach/israelcamp_mrnxqw.webp",
    });

    this.images.push({
      id: "john-16",
      name: "John 16",
      description: `John 16: 8-11: If we sin, it is because we have no faith; if we do what is right, it is because we believe.
      “Commit your way to the LORD, Trust also in Him, and He will do it.
       He will bring forth your righteousness as the light And your judgment as the noonday.” (Psalms 37:5-6)
       Wait on the Lord Jesus and He will grant you righteousness through faith in Him.
       When Christ is risen up and taken away from the sons of men, then faith is made possible, since we no longer see Him.
       Faith is the substance of things not seen.
       The ruler of this world is the one judged on the cross; Christ suffered a wound to His heel, but satan, a head wound.
      `,
      footer: "Elaborating John 16: 8-11...",
      fileName: "john16.webp",
      originUrl: "q_auto/f_auto/v1711590220/teach/john16_bgxtfk.webp",
    });

    this.images.push({
      id: "earthly-and-heavenly-man",
      name: "Earthly Man and Heavenly Man",
      description: `This is the most beautiful and unique archetype of Christ;
      it is unique because Adam is an antitype of Christ!
      Through Adam's one act of disobedience all have been made sinners and death reigned throughout all mankind.
      Through another Man, Jesus Christ, and His one act of obedience, righteousness to many who believe.
      Through Adam, all died, but through Christ, all will be made alive, the living and the dead, at the resurrection in the last day.
      There is a resurrection of the living, those who have fallen asleep in Christ, and a resurrection of the dead.
      It was God's good plan from the beginning that Jesus would be the salvation of the world;
      He spoke and said, "He will strike your head, and you will bruise His heel."`,
      footer: "Adam as an antitype...",
      originUrl: "q_auto/f_auto/v1711590170/teach/adamvsJesus_v7kc6a.webp",
      fileName: "adamvsJesus.webp",
    });

    this.images.push({
      id: "the-altar-of-christ",
      name: "The Altar of Christ",
      description: `We were crucified with Christ and made right with God through Him when He died on the cross on our behalf;
      so by sanctification we pick up our cross and follow Him, just as Isaac did when he subjected himself to his father, Abraham;
      he was spared of his life and was thereafter considered a living sacrifice.
      The cross is the altar of the sacrifice; and we are the sacrifice.
      So as we follow Christ, just as He took up His cross and became the sacrifice for sins, so we
      also pick up our cross and follow Him.
      Jesus rose from the dead and became the source of eternal salvation to everyone who believes;
      and we likewise, who were dead in sin, have become alive to God through faith, a living sacrifice.`,
      footer: "Die to the flesh and its passions...",
      fileName: "alterofGod.webp",
      originUrl: "q_auto/f_auto/v1711590174/teach/armorofGod_h3blcr.webp",
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
      originUrl: "q_auto/f_auto/v1711590217/teach/Jesuslionlamb_y91dzk.webp",
    });

    this.images.push({
      id: "the-armor-of-god",
      name: "The Armor of God",
      description: `When David went to go fight Goliath, he was given armor by Saul which did not fit him;
      however David had armor which was from God, an armor that is fitting for a man of God.
      Armor is for protection; what good is armor if we're hurt in battle?
      The war has been won by Christ on the cross, and we join into his victory through faith.
      Christ's victory is absolute: we stand on victory ground. Our fight is to claim the land God has promised us;
      and God has promised, He will fight for us and subdue our enemies before us.
      Therefore, we have strong confidence to go out and conquer the land which the enemy inhabits;
      for the LORD fights our battles and victory is with the LORD.`,
      footer: "Put on the whole armor of God...",
      originUrl: "q_auto/f_auto/v1711590174/teach/armorofGod_h3blcr.webp",
      fileName: "armorofGod.webp",
    });

    this.images.push({
      id: "repent-and-believe",
      name: "Repent and Believe",
      description: `Repentance is turning away from our previous way, and believing is turning to God.
      No-one can believe without first repenting; no-one can turn to Christ without first turning away from evil.
      We have one face and one back; if we face the Lord, our back is against every ungodly way.
      Faith is salvation. Repentance does no good unless you turn to Christ.
      How can one have life unless they repent of deathly works? Is not wrath against sin?
      Is that not what we need saving from?
      Christ saves: therefore, come to the knowledge of Him and be set free from sin through the truth.
      Unless you believe Jesus is He, you will die in your sins. Jesus is Lord and the Powerful one, able to save.
      Repent and Believe the Gospel.`,
      footer: "The response to the Gospel: repent and believe...",
      fileName: "repentandbelieve.webp",
      originUrl: "q_auto/f_auto/v1711590234/teach/repentandbelieve_nq987c.webp",
    });

    this.images.push({
      id: "run-the-race",
      name: "Run the Race of Faith",
      description: `The race is from start to finish by faith; so run! Run the race of faith.
      We race for the eternal crown of life.
      In the days before instant messaging, runners were sent out to run with a message;
      they ran to bring a word to the king or to whomever it may concern.
      So today, we are called to run the race of faith, bearing the good news in our bosom and proclaiming to every creature under the sun.
      All men everywhere have the universal right to the gospel;
      whether they accept it or reject it, let it be on them, but let your hands be clean.
      Bear the good news! Good men bring good news!
      Persuade with a cool spirit men to Christ Jesus; wrath does not accomplish the purpose of God.`,
      footer: "The life of faith is running...",
      fileName: "runtherace.webp",
      originUrl: "q_auto/f_auto/v1711590238/teach/runtherace_pnfqmo.webp",
    });

    this.images.push({
      id: "grace-and-truth",
      name: "Grace and Truth",
      description: `The law is physical, the Gospel is spiritual; and greater is the Spirit than the flesh.
      Through the law comes a knowledge of sin, but through grace and truth comes the knowledge of God.
      We have a choice: which tree to eat from. God has restored to us one command: believe.
      Enter into covenant with God through His oath of promise fulfilled by Jesus Christ;
      He fulfilled the oaths God made to the patriarchs, to David, and through the prophets.
      He was gracious to promise with His mouth and strong enough to perform with His hand.
      The law reveals our conscience, and Christ, full of grace and truth, reveals the invisible God.
      First was the ministry of sin and death, then the ministry of righteousness and life.
      How great the glory of the gospel of God!`,
      footer: "The law revealed the conscience, Christ revealed grace...",
      fileName: "grace&truth.webp",
      originUrl: "q_auto/f_auto/v1711735327/teach/grace_truth_loj0u0.webp",
    });

    this.images.push({
      id: "spiritual-worship",
      name: "Spiritual Worship",
      description: `The law gives power to pride and sin - it empowers sin within us;
      through the law comes a false sense of worship, as if our worship is by works of the law!
      But through the Spirit, we can worship the Father as He intended: in spirit and truth.
      We give our bodies as living sacrifice which is our spiritual worship;
      this is not on a set day, but everyday, offering ourselves as a living sacrifice to God.
      Then we can attribute proper worth to God who makes the temple holy, rather than worshipping the temple itself.
      The law honors the temple more than God who sanctifies the temple;
      everything about the law is physical, but the Spirit reigns over the flesh.
      The Spirit of God makes a house a temple, so our bodies are temples of the Holy Spirit.`,
      footer: "How we're called to worship...",
      fileName: "TrueWorship.webp",
      originUrl: "q_auto/f_auto/v1711735327/teach/TrueWorship_prs84a.webp",
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
      originUrl: "q_auto/f_auto/v1711590176/teach/baptismwaterandfire_z41pny.webp",
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
      originUrl: "q_auto/f_auto/v1711590180/teach/buildingontheRock_mxzsvs.webp",
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
      originUrl: "q_auto/f_auto/v1712630408/teach/theWordofLife_qtalbz.webp",
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
      originUrl: "q_auto/f_auto/v1712630408/teach/Father_Son_lbtri6.webp",
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
      originUrl: "q_auto/f_auto/v1712630408/teach/wineskins_nkx8o9.webp",
    });

    this.images.push({
      id: "tabernacle-courtyard",
      name: "Tabernacle Courtyard",
      description: `Everything in the tabernacle had a covering: the altar had the meat, the wash basin had water,
      the gold altar had incense, the table had bread, the lampstand had lamps with oil;
      the Ark of Testimony had it's covering of atonement.
      The Tent of Meeting had a covering; only the courtyard had no covering.
      Likewise, we have a covering: Christ Jesus.
      He is the atonement, the bread and water of life, the light of our darkness, and the incense of our prayers.
      And we are the temple of the living God, offering spiritual sacrifices to God through Christ.
      He is your head, nourishing the body making it to grow as it ought to grow;
      He makes it to mature into perfect form, complete and at rest in holiness.`,
      footer: "All items in the Tent had a covering...",
      originUrl: "q_auto/f_auto/v1711590183/teach/courtyard_atzssw.webp",
      fileName: "courtyard.webp",
    });

    this.images.push({
      id: "the-day-of-the-lord",
      name: "A Thief in the Night",
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
      originUrl: "q_auto/f_auto/v1711590189/teach/dayoftheLord_a7yocn.webp",
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
      originUrl: "q_auto/f_auto/v1711590191/teach/deathandlife_gcfidy.webp",
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
      originUrl: "q_auto/f_auto/v1711590194/teach/doctors_gtvq2g.webp",
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
      originUrl: "q_auto/f_auto/v1711590199/teach/firstandlast_qvzmdt.webp",
    });

    this.images.push({
      name: "The Flesh: Pride and Lust",
      id: "pride-and-lust",
      description: `All sins of the flesh pertain to lust and pride.
      Lust is coveteousness, desiring things which are seen;
      the remedy for this disease is faith, believing in Him who is unseen.
      Pride is selfishness, glorying in one's self of achievement;
      the remedy for this sickness is Jesus Christ.
      He did not consider Himself equal with God, but took on the form of a servant and appeared in the likeness of man.
      And He humbled Himself to death, even death on a cross;
      and for this reason God highly exulted Him and bestowed on Him a name greater than every other name,
      that at the name of Jesus Christ every knee will bow and every tongue will confess, "Jesus is Lord".`,
      footer: "Flesh of the mind and eyes...",
      fileName: "flesh.webp",
      originUrl: "q_auto/f_auto/v1711590202/teach/flesh_izazns.webp",
    });

    this.images.push({
      id: "the-harvest-in-the-end",
      name: "The Harvest in the End",
      description: `Jesus is the first to rise from the dead as first fruits to God.
      Just as God makes the crop grow, He shows us how the resurrection will occur in the end.
      First the seed in the soil dies, then it springs up in a new kind of glory, which was not like the last.
      It is planted in the ground and dies, then sprouts up with new life.
      The crop brought before the LORD at the Festival of Firstfruits symbolizes this;
      it points to Jesus Christ who is the firstfruits of the harvest, the first to rise from the dead.
      It is appointed for men to die once, then comes the judgement;
      just as Christ was offered once to bear the sins of many.`,
      footer: "All things created by Him and for Him...",
      fileName: "harvest.webp",
      originUrl: "q_auto/f_auto/v1711590208/teach/harvest_tncb4h.webp",
    });

    this.images.push({
      id: "israelite-camp",
      name: "Israelite Camp",
      description: `The materials which are rare, are in a sense, holy;
      just as gold is more rare than silver and esteemed more highly.
      And in that lies a distinguishing mark of holiness - rarety;
      for what is common, or not holy, is something which is abundant.
      Gold is esteemed holy among the children of men because it is not often found - there is not much of it.
      Stones are common because there are so many.
      Likewise, Israel was a holy jewel in the wilderness who dwelt separate from the other nations.
      The Spirit of the Lord shows that anyone who builds a house for the Lord must do so through wisdom.
      Solomon, who was filled with wisdom, built the temple of the Lord;
      and Bazadel and Oholiab were filled with the Spirit to build the Tabernacle.
      Wisdom is the most prized jewel under heaven; whoever finds her is blessed.`,
      footer: "Parables through the creation of the Tabernacle...",
      fileName: "israelitecamp.webp",
      originUrl: "q_auto/f_auto/v1711590211/teach/israelitecamp_iuepsc.webp",
    });

    this.images.push({
      id: "impartial-judgement",
      name: "Impartial Judgement",
      description: `Before each judgment are a series of events: a gathering of nations, thrones setup, and the dead are raised (or those who have fallen asleep in the Lord),
      and finally, judgment. In the Revelation given to John, you will see these things in common between both judgements of the righteous and the wicked.
      There are two judgements just as there are two resurrections. Blessed are those who take part in the first resurrection, for the second death holds no power over them!
      In our flesh our eyes will see Him, we will awake and see the Lord. There is great hope for the righteous, but the wicked, their names will be blotted out.
      Knowing the good we have in the Lord, we ought to strive for the right way.`,
      footer: "Two resurrections...",
      fileName: "judgementday.webp",
      originUrl: "q_auto/f_auto/v1711590223/teach/judgementday_pfgryw.webp",
    });

    this.images.push({
      id: "the-four-soils",
      name: "The Four Soils",
      description: `There are four soils the Lord spoke about;
      there are also four different soils the nation of Israel were in.
      There is one soil which is good soil and fruitful: this represents the land of promise, Canaan, a land flowing with milk and honey.
      The other three soils were unfruitful; Israel dwelt in three other lands throughout history.
      The wilderness represents the seed that was scorched and had no root, for the wilderness is hot, without water, and desolate.
      The land of Exile represents the seed choked out by thorns, for the thorns represent the world, Babylon, which Israel went into exile.
      And the land of bondage and slavery, Egypt, is the rocky soil, where the birds ate up the seed, since oppression comes from the evil one.
      We ought to ask ourselves, which land are we dwelling in currently? Believe the promise and occupy the good land.`,
      footer: "Which soil are you...",
      fileName: "land.webp",
      originUrl: "q_auto/f_auto/v1711590225/teach/land_wvithb.webp",
    });

    this.images.push({
      id: "one-god",
      name: "One God",
      description: `There is one God and one Mediator between God and man: Christ Jesus.
      The Father is greater than the Son, but the Son is equal to the Father, for there is one Spirit;
      He is the Spirit of the Father and the Spirit of the Son;
      and our fellowship is with the Father and the Son.
      By the will of the Father, He has caused us to be born again unto a living hope.
      He made us to be born again when He sent His Spirit into our hearts, filling us with the love of God;
      this occurred when we heard the Word of Truth and believed.
      There is One God; and the Spirit teaches us all things pertaining to Christ;
      whoever is taught by the Father comes to Jesus and He gives them eternal life.`,
      footer: "One God all in all...",
      fileName: "oneGod.webp",
      originUrl: "q_auto/f_auto/v1711590229/teach/oneGod_vv0hh8.webp",
    });

    this.images.push({
      id: "eternal-life",
      name: "Eternal Life: Cultivation",
      description: `Cultivating the soil is the ministry of repentance, for the hardened ground is broken up when one who confesses his sins.
      And planting the seed is preaching the word of faith, the good news of the Kingdom.
      This is what it means to be born of water, to repent and be baptized; this was the ministry of John and the apostles.
      John never did any miracles, nor laid his hands on anyone.
      And then the miracle of God is passing through death and remaining alive - just as Israel passed through the Red Sea.
      Jesus mentioned, the baptism of the Spirit and Fire...
      This is the harvesting to eternal life and threshing is the suffering we will endure.
      Jesus baptized in the Spirit; the apostles laid hands on men to receive the Holy Ghost.`,
      footer: "The seed is the Word of God...",
      fileName: "salvation.webp",
      originUrl: "q_auto/f_auto/v1711590242/teach/salvation_piunap.webp",
    });

    this.images.push({
      id: "sayings-and-commands",
      name: "Trustworthy Sayings and Solemn Commands",
      description: `There are trustworthy sayings Paul gave Timothy and Titus;
      there are also commands he charged them with.
      We are all not called to the office of Timothy or Titus, but there are many trustworthy things here.
      He commanded them to speak these things to the church; and we are the church, so we should listen to these things.
      We ought to heed these things and look deeply into them, holding fast to them until the end.
      These men were committed with a trust, for they were deemed trustworthy; so they were given trustworthy sayings.
      We ought to esteem highly men as these who humbly served the Lord;
      for they serve the Lord for our sakes that we may partake in the promise of God.`,
      footer: "Paul's sayings and commands...",
      fileName: "sayingsandcommands.webp",
      originUrl: "q_auto/f_auto/v1711590247/teach/sayingsandcommands_xuhgyh.webp",
    });

    this.images.push({
      id: "opposing-wills",
      name: "Opposing Wills",
      description: `We are in the middle of two conflicting wills: who's desire will we do?
      Satan's will is a lie, which results in sin unto death;
      God's will is obedience unto righteousness, and the result is holiness, whose end is eternal life.
      We should chose eternal life; we should chose the Lord.
      If we hate ourselves, we will continue to please ourselves in the moment with our sin;
      we will reap what we sow, just as nature and God and truth says.
      We're all born into sin through Adam, but in Christ, we've been made new through the Word of the testimony.
      Cross over into new life through Jesus Christ.
      Beleive in His Word and reject the voice of the world, whose ruler is satan, the liar;
      "Through the cross, I've lost intrest in the world and the world in me."`,
      footer: "We are in the middle of a battle...",
      fileName: "sinvswillofGod.webp",
      originUrl: "q_auto/f_auto/v1711590252/teach/sinvswillofGod_qwzj8a.webp",
    });

    this.images.push({
      id: "slaves-or-sons",
      name: "Slaves to Sin or Sons to Righteousness",
      description: `Sons are those who are born of the Father; a slave is one who is not born of Him, but is put to forced labor.
      He does not obey except by force; and they think must work for God's favor;
      with this mindset, there is always sin, for even the motive is wrong - how can the fruit be good?
      Besides we do not always do what we're supposed to. A son is one who through grace is born into the household.
      You are born of Him if you have believed the Gospel.
      Just as we have obtained our natural birth by not doing anything for it, so it is with our spiritual birth.
      We are made sons of God by faith in Jesus Christ.`,
      footer: "We either get what we deserve or what we don't...",
      originUrl: "q_auto/f_auto/v1711590253/teach/slavesvssons_g5zfi7.webp",
      fileName: "slavesvssons.webp",
    });

    this.images.push({
      id: "our-jobs",
      name: "Our Job: Soldier, Athlete, Farmer, Fishermen",
      description: `We learn things by the things we know.
      You know and experience at least one of these things: soldier, athlete, farmer, fisherman.
      How blessed is this truth! God uses these symbols of everyday life to show us how ministry is.
      The farmer sows and reaps, he is first to eat the fruit of his labors.
      The soldiers stays separate from civilian life.
      The fisherman waits patiently for a catch and brings fish into his net.
      The athlete competes according to the rules.
      Let God's Spirit show you the meaning of these things so that you may be wise in your labors.
      Let the Lord guide you in the way which leads to everlasting life, both for yourself and your hearers.`,
      footer: "You are soldiers of Christ Jesus...",
      originUrl: "q_auto/f_auto/v1711590258/teach/soldierathletefarmerfishermen_ebpnk9.webp",
      fileName: "soldierathletefarmerfishermen.webp",
    });

    this.images.push({
      id: "the-place-of-meeting",
      name: "The Place of Meeting: Tabernacle",
      description: `The inner sancturary is where God abides.
      And our bodies are temples of the living God;
      and all the members of the church are collectively the temple of God.
      God's temple is holy; whoever destroys God's temple, He will destroy.
      The law is written on the believer's heart;
      and the tablets of the covenant were in the ark of the covenant in the inner sancturary.
      The ark represents our innermost being, the heart.
      These bodies of ours are temporary; our tent will be taken down one day.
      But our tabernacle is only for a short time, but we look forward to a temple with its foundation on the rock, our new spiritual bodies.`,
      footer: "We have fellowship with God in the place of meeting...",
      originUrl: "q_auto/f_auto/v1711590262/teach/Tabernacle_bdapzh.webp",
      fileName: "Tabernacle.webp",
    });

    this.images.push({
      id: "tester-of-metals",
      name: "Tester of Metals",
      description: `It is a blessing to be rebuked; the wise listen to correction, but a mocker pays no attention.
      If we cannot withstand the judgment of the wise, how can we withstand the All Mighty Judge when we stand before Him?
      This is God's grace for us, that we should repent and do as the prophet Jeremiah says and all the other prophets.
      They came to test the quality of men: they do so, so that we wouldn't be ultimately judged in the end with everlasting fire.
      It's is better to be tested now and survive, than to be tested then and be burned up.
      For everything will pass through the fire, if it withstands we will receive a reward; and if it is burnt up, we will suffer loss.`,
      footer: "We will all be salted with salt...",
      originUrl: "q_auto/f_auto/v1711590265/teach/testerofmetals_dazuwl.webp",
      fileName: "testerofmetals.webp",
    });

    this.images.push({
      id: "marriage-type-of-church",
      name: "Marriage: a Type of the Church",
      description: `The woman's head is man, and she is his body.
      Christ is our head, that means we are His body: the church.
      The church is brought forth out of Christ's body just as Eve was created out of Adam's body.
      Adam's body was broken for his wife; and she is subject to her husband just as the church is subject to Christ.
      Whoever doesn't care for his body hates his own flesh; Christ loved us and gave up His life for us -
      He cares for us. The head is a symbol for authority, and the body is under the head.
      The head is over the body, so the head is ruler over the body. We are the body of Christ.`,
      footer: "We are one with Christ as Eve was one with Adam...",
      fileName: "thechurch.webp",
      originUrl: "q_auto/f_auto/v1711590268/teach/thechurch_n6uhvl.webp",
    });

    this.images.push({
      id: "the-law-of-liberty",
      name: "The Law of Liberty",
      description: `The law of God can be used correctly or incorrectly.
      For one, it is for the godless; tt is there to convict to the sinner of his way.
      It is there to show us what sin is;
      I would have not known coveting is sin if the law had not said, "You shall not covet".
      The law was put into place for us as a guardian until the way of faith was revealed.
      It is not a means to righteousness, for no one can fully obey it.
      It is not given for strict obedience, as works to righteousness.
      It was given so that we may obtain to righteousness through faith, for it testifies to Christ.
      The disobedient have fear of punishment, but the righteous are at peace.
      The law is not for the righteous, but for the sinner.
      If we follow the Spirit, we will obey the law; this is only possible through Jesus Christ and the new creation.`,
      footer: "Those who do right have no fear...",
      fileName: "theLaw.webp",
      originUrl: "q_auto/f_auto/v1711590271/teach/theLaw_xtsiev.webp",
    });

    this.images.push({
      id: "the-way",
      name: "The Way of the Spirit: Walk and Run",
      description: `If we set our minds on earthly things, we will surely follow earthly things, living according to the flesh.
      Walking is living step by step, running is the same thing, but with eagerness.
      We always follow who comes before us; the way of one before us is given as an example.
      As children we follow the examples we see; and as children we walk after our parents - they are our examples.
      We, as little children of God, walk after Jesus Christ, following His example;
      we pattern our lives after His life, imitating Him as children of God.
      We imitate Him who we see; if we say we see Him, but do not do as He does, we lie.
      `,
      footer: "What do we haste after...",
      fileName: "theway.webp",
      originUrl: "q_auto/f_auto/v1711590274/teach/theway_hywb5a.webp",
    });

    this.images.push({
      id: "thieves-bandits",
      name: "Thieves and Bandits",
      description: `Ah my favorite! I love this! Thieves are the hypocrites; bandits are they who acknowledge they're sinners.
      The bandit sins outwardly, he is the one Christ came for; He comes for they who know they are sinners.
      They who think they are righteous, they are the hypocrites; there is none that does right.
      They are inwardly defiled and outwardly clean; they appear as just men before the people, yet inwardly are corrupt.
      They are clean in their own eyes, but God looks at the heart.
      Jesus rebuked the hypocrites sharply, He takes no pleasure in deceit.
      Evil is evil, but it is better to be a bandit than a thief!
      A thief only feels shame when he gets caught; a bandit wears his shame on the face and he primed for the gospel of Jesus Christ.
      Thieves have no need for forgiveness since they are pure in their own eyes.`,
      footer: "Some wear their sin on the inside and others on the outside...",
      fileName: "thievesbandits.webp",
      originUrl: "q_auto/f_auto/v1711590277/teach/thievesbandits_ybigmc.webp",
    });

    this.images.push({
      id: "detest-delight",
      name: "Detests vs Delights",
      description: `All falsehood the Lord God hates. Hypocrisy.
      Sacrifices offered with an impure heart. Abomination.
      He loves truth and mercy and humility.
      He looks at the heart, and judges according the thoughts and the desires of the heart.
      He abhors evil, but He is love. He has not desired a sacrifice for sin, but has given a Sacrifice for our sins.
      Men pay sacrifices to God, without question; however who has ever heard of God giving a sacrifice for man?
      What is man that He should honor us? What is humankind that He should look upon us?
      He is just; He hates injustice. Even scales are His delight; a false weight is an abomination.
      There are six abominations to the Lord, seven which He hates.`,
      footer: "What the Most High detests and delights...",
      fileName: "detestvsdelight.webp",
      originUrl: "q_auto/f_auto/v1711735328/teach/detestvsdelight_h4xby0.webp",
    });

    this.images.push({
      id: "the-father-son-spirit",
      name: "The Father, the Son, the Holy Spirit",
      description: `The Father and the Son and the Spirit are equal.
      Many great men came from God: Samson, John the Baptist, Moses, David, and many others.
      They all exemplify an attribute of Christ and prophecy to Christ with their lives and with their speech, but they all stumbled in some way.
      How much greater is Christ Jesus than these men?
      He is the sum of all the goodly attributes of all these men, having given them their lives and character, who is also without sin.
      Yes Jesus Christ is great! And how much more greater is the Father whom He testified to, saying, "The Father is greater than I".
      No man has seen the FAther at anytime, but the Son has revealed Him to us.`,
      footer: "Revelation about the Father, Son, and the Spirit...",
      fileName: "theFatherSonSpirit.webp",
      originUrl: "q_auto/f_auto/v1711735327/teach/theFatherSonSpirit_cv11oq.webp",
    });

    this.images.push({
      id: "the-father-the-son",
      name: "The Father and the Son",
      description: `A contrast between the Father and the Son. There is a saying, "Like Father like son".
      So the son is like the father, and the daughter like the mother.
      Jesus Christ is the perfect Son, doing everything the Father told Him to do and say.
      He resembles God in His exact likeness, for He is the perfect Son.
      Therefore, He is the Mediator between us and God, for we also have been made sons.
      We can only come to the Father through Him; and no other way will work.
      Only through Christ do we have access to the Father.
      Our prayers are to the Father, through the Spirit of holiness, in the name of the Son, Jesus Christ.
      We ask and receive because we ask in His name because the Father Himself loves us, because we love Him and obey His commandments.`,
      footer: "Scripture gathering of the Father and the Son...",
      fileName: "theFather&theSon.webp",
      originUrl: "q_auto/f_auto/v1711735329/teach/theFather_theSon_d2ax76.webp",
    });

    this.images.push({
      id: "not-inherit-the-kingdom-verse",
      name: "Will Not inherit the Kingdom (verses)",
      description: `Test yourself to see if any of these apply to you;
      it is for our benefit to know before the time and have confidence that we believe.
      Our works justify our faith, and our faith is in Jesus.
      Only the new creation can inherit the new heaven and the new earth;
      and unless you receive the kingdom like a little child you will by no means enter into it.
      We ought to prove ourselves worthy, picking up our cross and following Him;
      and we ought to love the Lord with an undying love.
      Consider what great things He has done for you.
      No one who practices lawlessness will enter into the kingdom;
      and unless your righteousness surpass the Pharisees you will by no means enter.`,
      footer: "These will not inherit the Kingdom...",
      fileName: "willnotinherit.webp",
      originUrl: "q_auto/f_auto/v1711735327/teach/willnotinherit_n0mujj.webp",
    });

    this.images.push({
      id: "inherit-the-kingdom-verse",
      name: "Will Inherit the Kingdom (verses)",
      description: `Only the new creation will inherit the kingdom of heaven.
      Those who are sons of God have been given the Spirit of the Son;
      and if we are sons, then we also are hiers of the kingdom of the Father.
      All things belong to us; and we belong to Christ, and Christ belongs to God.
      Corruption cannot inherit incorruption, therefore, we must be born again.
      And we are born again through the Word of Truth.
      Our faith is most holy to make us holy in body and spirit;
      and from faith in the Lord comes our sanctification unto holiness;
      and if we are holy, we will inherit the kingdom of heaven; "Without holiness no one will see the Lord"`,
      footer: "These will inherit the Kingdom...",
      fileName: "willinheritverses.webp",
      originUrl: "q_auto/f_auto/v1711735327/teach/willnotinheritverses_vzafs5.webp",
    });

    this.images.push({
      id: "inherit-the-kingdom",
      name: "Will Inherit the Kingdom (grouping)",
      description: `Oh, the purity of the gospel!
      Being content is thankfulness, purity is speaking truth, and morality is the righteousness by faith.
      What does God ask from us, but what He already has done for us?
      He makes us thankful for His grace, He saves us by His truth, and He makes us righteous through faith in Him!
      Oh, how perfect and beautiful is the Lord, my God! How righteous and holy is He!
      Give thanks to the Lord for His thankfulness! Sing songs of His praise!
      Confess Him among the gentiles, and speak truth in love to your neighbor.
      Hide not salvation from the great congregation, conceal not God's great works from the gentiles.
      The reason for every command is Jesus Christ; He is the reason why.`,
      footer: "These will inherit the Kingdom...",
      fileName: "willinheritbucket.webp",
      originUrl: "q_auto/f_auto/v1711735327/teach/willinheritbucket_fx9boh.webp",
    });

    this.images.push({
      id: "not-inherit-the-kingdom",
      name: "Will not Inherit the Kingdom (grouping)",
      description: `Covetousness comes from unthankfulness, a coveteous person desires and lusts after another's possessions.
      All coveteousness is idolatry, a worshipper of the things of this world; and no idolaters will inherit the kingdom of God.
      Impurity comes from falsehood, from the mouth comes this defilement;
      everything spoken comes from the heart, and from it flow the issues of life.
      Issues are defiling, as the law says;
      and Jesus spoke likewise, "All these evil things proceed from within and defile the man." (Mark 7:23).
      And sin comes from not believing in Christ.
      Believe in God, loved ones. If we believe in Him, we will not sin.
      No one who has seen Him sins; if we abide in Him we will not sin, for in Him is no sin.`,
      footer: "These will not inherit the Kingdom...",
      fileName: "willnotinheritbucket.webp",
      originUrl: "q_auto/f_auto/v1712630408/teach/willnotinheritbucket_l3vyi1.webp",
    });

    return this.images.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
}
