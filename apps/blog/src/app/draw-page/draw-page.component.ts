import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faArrowUpRightFromSquare,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
export interface Image {
  id: number;
  name?: string;
  description: string;
  footer: string;
  originUrl: string;
  isFinishedLoading?: boolean;
  video?: string;
  fileName?: string;
}
@Component({
  selector: "blog-draw-page",
  templateUrl: "./draw-page.component.html",
  styleUrls: ["./draw-page.component.scss"],
})
export class DrawPageComponent implements OnInit {
  public imageIcon = faImage;
  public faLink = faArrowUpRightFromSquare;

  public images: Image[] = [];
  constructor(private router: Router) {}

  navigate(image: Image) {
    if (image.video) {
      this.router.navigateByUrl("draw/" + image.video + "/" + image.fileName);
    } else {
      this.router.navigateByUrl("draw/" + image.fileName);
    }
  }

  hideLoader(id: number) {
    const i = this.images.find((image) => image.id === id);
    i.isFinishedLoading = true;
  }

  ngOnInit(): void {
    this.images.push({
      id: 0,
      name: "Covenant Promise",
      description: `The promise is available to everyone; we pray that many experience the promise which is through faith;
        the fulfillment of promise is in Christ, He is the Yes and Amen; we work hard to convince first ourselves then our neighbor,
        knowing this Good News is for everyone and the Word has the power to save. We obtain the promise, not by faith, which assumes
        an instance of faith, but through faith which means a progression or working of faith.
        It is BY grace we are saved, which in turn refers to an instance of grace by our Lord on the cross.`,
      footer:
        "We enter into the Covenant of Promise, the New covenant, by believing in the Promise of God...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590185/teach/covenantpromise_lq6374.webp",
      video: "FHfh48WzFcU",
      fileName: "covenantpromise.webp",
    });

    this.images.push({
      id: 1,
      name: "Being a child of the Day",
      description: ``,
      footer: "Be of the Day, a child of the Light, servants of the Lord...",
      fileName: "daynight.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590187/teach/daynight_yob9oh.webp",
    });

    this.images.push({
      id: 2,
      name: "Fear of the Lord",
      description: ``,
      footer:
        "The fear of the Lord produces humility and a righteous hatred...",
      fileName: "fearLord.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590197/teach/fearLord_znqj9t.webp",
    });

    this.images.push({
      id: 3,
      name: "The Gospel",
      description: `Even though a believer is saved, as he sits with Christ in heavenly places, we must walk in the Spirit and sow to the Spirit and stand against the wiles of the enemy; also endurance until the end, holding fast to the Gospel which we first came to believe. Therefore, let us remember in humility of mind that we are not better than anyone, but through our conduct in a dark world, we can save through the transformation of Christ in us. I will call to remembrance seasoned vets in the Lord the scripture of Ezekiel 16: what God has done for us isn't because we're so great but because we were so helpless; God's grace had nothing to do with us, He gave us love unmerited, so if we boast, we boast in Christ.`,
      footer:
        "Jesus has done everything for us, and we are His work, we enter into His rest...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590205/teach/gospel_cxqott.webp",
      video: "bZsUhZAH6Hg",
      fileName: "gospel.webp",
    });

    this.images.push({
      id: 4,
      name: "Reproach, Reprove, Rebuke, Reprimand",
      description: ``,
      footer:
        "Differences between all the 're' words and understanding the prefix...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590232/teach/re_g8fwmi.webp",
      fileName: "re.webp",
    });

    this.images.push({
      id: 5,
      name: "Sanctification Explained",
      description: ``,
      footer: "Moving away from earthly things to heavenly things...",
      fileName: "sanctification.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590244/teach/sanctification_jjdelm.webp",
    });

    this.images.push({
      id: 6,
      name: "Sin, Righteousness, Judgement",
      description: `When we believe in Christ, our sins are forgiven by grace;
        however, it's not a means to continue on sinning deliberately and continuously while claiming grace.
        That would get us into the realm of unforgivable sins which are not covered by the Blood of Christ.
        We are made right or justified by God because of our faith in Jesus. God was not unjust when He justified us through Christ;
        When He punished His Son, we were likewise condemned on the cross, He was substituted  for us and as us;
        When we know that, we will walk in Truth through the knowledge of Christ, who is Knowledge Himself and Wisdom.
        His sacrifice is sufficient for us in order to draw us near to God.`,
      footer: "Elaborating John 16: 8-11...",
      fileName: "john16.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590220/teach/john16_bgxtfk.webp",
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
    //   originUrl: "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590170/teach/adamvsJesus_v7kc6a.webp",
    //   fileName: "adamvsJesus.webp",

    // });

    this.images.push({
      id: 8,
      name: "The Altar of Christ",
      description: `We were crucified with Christ and made right with God through Him when He died on the cross on our behalf, believing in the message of grace;
      therefore, by sanctification we pick up our altar or cross and follow Him, just as Isaac did when he subjected himself to his father;
      he was spared of his life and is today an example of a living sacrifice as Christ is the Lamb who was slain found standing and living (Rev 5:6).
      Here refers to the body and mind of the flesh which we have deliverance from in Christ through His death and working on the cross.`,
      footer:
        "Death must be worked out in the body and soul of the flesh. Many know about the body of the flesh. What about the mind of flesh? ...",
      fileName: "alterofGod.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590174/teach/armorofGod_h3blcr.webp",
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
    //   originUrl: "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590174/teach/armorofGod_h3blcr.webp",
    //   fileName: "armorofGod.webp",

    // });

    this.images.push({
      id: 10,
      name: "You must be Born again of Water and Fire",
      description: `The baptism of water is that of repentance. John the Baptist was the first apostle sent by God to proclaim water baptism, confession of sin and
      repentance thereof. He preached that we should believe in the One to come after him. The 12 were sent by God baptizing and making disciples after witnessing Him.
      There is another baptism of fire which is of the Spirit and includes tribulation and refining from impurities. Jesus is the One Who baptized in the Spirit.
      We are saved (1 Peter 3:21) through water as Noah and his family were saved through the deluge. In the future when the world is judged by fire,
      we will be caught up in the heavens and will not perish along with the rest of the world. The main point of baptism in water is an appeal to God for a good conscience.
      Our conscience has been defiled and corrupted from this world and it's necessary to appeal to God for a cleansed one through Christ's sacrifice.
      Baptism is burial; burial with Christ. No-one qualifies for burial unless they are first dead; likewise, we must first be dead to sin, confessing and repenting of sin
      to qualify for baptism. The Holy Spirit is given to those who have believed in God's Son and obey Him. The cloud by day and fire by night that lead the Israelites out of Egypt is the Holy Spirit -- again, Spirit (wind) and Fire.
      They followed the pillar, as we follow the Spirit. They were baptized as followers of Moses through the red sea, as we are of Christ.
      They ate the same spiritual manna, just as we eat of the same sacrifice that those who worked at the Tabernacle had no right to eat -- Christ's flesh.
      And we drink of the same Spirit (1 Cor 12:13) as they did in the wilderness which was the Rock, or Christ, Who traveled with them.
`,
      footer: "You must be born again of Water and Spirit (John 3)...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590176/teach/baptismwaterandfire_z41pny.webp",
      video: "dPiS7XPJei0",
      fileName: "baptismwaterandfire.webp",
    });

    this.images.push({
      id: 11,
      name: "Building on the Rock",
      description: `In the end, we will not be judged based on our faith, but by our actions. Our faith and actions work together.
      What good is it, to say we have faith but have no works. Can that faith help another or even save ourselves?
      No! Such a faith has no merit in reality and it is a delusion, but a faith that lives and moves and has it's being in reality is good and can save if we hold fast.
      We build our house upon the rock, if when things are good, we obey the Gospel of God: how can we stand when calamity comes if we don't even obey when things are good?
      Jesus Christ is the Rock. We believe in Him and also follow after Him: following Him is doing the things He did when He was on earth - He is the Example, He is the Way.`,
      footer:
        "How do you know if you're well built, only by the testing of calamity...",
      fileName: "buildingontheRock.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590180/teach/buildingontheRock_mxzsvs.webp",
    });

    // this.images.push({
    //   name: "Tabernacle Courtyard",
    //   description: `Everything in the tabernacle has a covering: the altar has the meat, the wash basin has water,
    //   the gold altar has incense, the table has bread, the lampstand has lamps with oil, the Ark of Testimony has it's covering of atonement.
    //   The item is static and it's covering is dynamic; even yet, the item is dynamic in a sense it has poles inserted.
    //   Even the Tent of Meeting itself has a covering: the only exception would be the courtyard, it has no covering.
    //   We also have a covering: Christ. He is the atonement, bread, water, light, sacrifice, and incense. We follow Him, doing everything He did.`,
    //   footer: "All items in the Tabernacle have a covering...",
    //   originUrl: "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590183/teach/courtyard_atzssw.webp",
    //   fileName: "courtyard.webp",

    // });

    this.images.push({
      id: 13,
      name: "The Day of the Lord",
      description: `Of the day, we are sober, in our right mind and attentive, watchful in prayer. Those of the night are drunk, out of their right mind, unaware and foolish.
      The day of the Lord will come as a thief in the night: to those in the Day, who are watchful waiting for Him, it will be day; otherwise, it will be night to the others.
      Wouldn't it be better, you may ask, if the Lord told us when He was coming, so we would be ready? No. We are to be alert at all times, expecting His coming every day.
      Otherwise, we may think to ourselves, my Master is a long time in coming, I will take an easy and be merry. Then He will come unexpectedly, catching that one off guard, assigning him to a place with the hypocrites.
      This so called wisdom is folly.`,
      footer: "The day of the Lord vs the night of the thief...",
      fileName: "dayoftheLord.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590189/teach/dayoftheLord_a7yocn.webp",
    });

    this.images.push({
      id: 14,
      name: "Our union with Christ: past, present, and future",
      description: `We have died with Christ, crucified with Him, pinning our desires and intents of our wicked heart to the cross, putting to death our sinful nature.
      By God's gift, we have received through faith in Christ new life, having been crucified with Him and baptized in His death, buried with Him for the forgiveness of sins.
      These things are referring to the past, if we have believed they are our past. Our present life is living in death! Picking up our cross, removing dark deeds, and nailing to the cross anything fleshly & earthly within us.
      But by the resurrection of Christ, we put Him on as new clothes, and we are the living sacrifice unto God, putting on also the shinning armor of righteous living, the armor of God, living by His Spirit.
      Our future is also tied up in Christ: transformation of these lowly bodies into glorious spiritual bodies and the resurrection of the dead on the last day. We see that Christ's death must work in us so that His life will also be revealed in us.
      `,
      footer:
        "Death must work in us, so that His life will also be revealed in us...",
      fileName: "deathandlife.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590191/teach/deathandlife_gcfidy.webp",
    });

    this.images.push({
      id: 15,
      name: "The Spiritual Doctor",
      description: `Jesus is the Doctor, healing people by grace through faith in His name - yes, even the blind were healed, having not seen Him but only heard Him.
      That means you too, without seeing Him, can believe He is Him and be healed. He fixes our hearts, heals our bodies, and saves our souls from damnation: a total salvation.
      A physical doctor prescribes treatments that do not help with the root cause - but Jesus, fixes the issue through the forgiveness of sins by grace.
      Doctors poke and prod to come up with a diagnosis, but Jesus, the Creator, of the heart and body and mind knows the issue and fixes the underlying cause, deeper than a scalpel can reach.
      Our sickness is sin & Jesus circumcises our sinful nature, removing it from our spirits so that we would obey Him, writting on our hearts His law.
      The world prescribes 'Do this & Don't do this' for our sin problem, but they do not help with conquering one's sinful desires; Jesus completely cuts it away and loves us.`,
      footer:
        "Healthy people do not need a doctor, the sick do; I have called not the righteous but sinners to repentance...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590194/teach/doctors_gtvq2g.webp",
      fileName: "doctors.webp",
    });

    this.images.push({
      id: 16,
      name: "Jesus, the First & Last, the Beginning & End, the Alpha & Omega",
      description: ``,
      footer:
        "Jesus was Servant of all & now, is First in heaven: Lord of Lords and King of Kings...",
      fileName: "firstandlast.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590199/teach/firstandlast_qvzmdt.webp",
    });

    // this.images.push({
    //   name: "The Flesh: lust & pride",
    //   description: ``,
    //   footer:
    //     "There is sin of the flesh & also of the soul, which contains the mind...",
    //   fileName: "flesh.webp",

    //   originUrl: "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590202/teach/flesh_izazns.webp",
    // });

    this.images.push({
      id: 18,
      name: "The Harvest",
      description: ``,
      footer:
        "All things created by Him and for Him (see the First & Last teaching)...",
      fileName: "harvest.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590208/teach/harvest_tncb4h.webp",
    });

    this.images.push({
      id: 19,
      name: "Israelite Camp",
      description: ``,
      footer:
        "We can see teachings & parables through the creation of the Tabernacle...",
      fileName: "israelitecamp.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590211/teach/israelitecamp_iuepsc.webp",
    });

    this.images.push({
      id: 20,
      name: "The Lion & the Lamb",
      description: ``,
      footer:
        "Similarities between Isaac and Benjamin prophesying about Jesus...",
      fileName: "Jesuslionlamb.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590217/teach/Jesuslionlamb_y91dzk.webp",
    });

    this.images.push({
      id: 21,
      name: "The Day of Judgement",
      description: ``,
      footer:
        "Two judgements of the righteous and the wicked, two resurrections...",
      fileName: "judgementday.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590223/teach/judgementday_pfgryw.webp",
    });

    this.images.push({
      id: 22,
      name: "The Land of Inhabitation",
      description: ``,
      footer: "Which land are you currently residing in (only four options)...",
      fileName: "land.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590225/teach/land_wvithb.webp",
    });

    this.images.push({
      id: 23,
      name: "One God",
      description: ``,
      footer: "One God all in all...",
      fileName: "oneGod.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590229/teach/oneGod_vv0hh8.webp",
    });

    this.images.push({
      id: 24,
      name: "Repent & Believe",
      description: `Repentance is salvation. How can one be saved unless they repent of dead works? Are they not what we need saving from? Do not be deceived. God forgives us through Christ and He died for us and nullified the power of sin, since we are made right through faith in Jesus Christ. Christ saves: Come to the knowledge of Him and be set free from sin through the Truth. Unless you believe Jesus is He, you will die in your sins. Jesus is Lord and the Powerful one. `,
      footer:
        "The response to the Gospel to all who have heard and believed unto new life...",
      fileName: "repentandbelieve.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590234/teach/repentandbelieve_nq987c.webp",
      video: "Jl7k4Iu9mKs",
    });

    this.images.push({
      id: 25,
      name: "Run the Race of Faith",
      description: ``,
      footer:
        "To live the life of faith, is to be like an athlete, running a race...",
      fileName: "runtherace.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590238/teach/runtherace_pnfqmo.webp",
    });

    this.images.push({
      id: 26,
      name: "Steps to Eternal Life",
      description: ``,
      footer:
        "The seed must first be planted on fertile soil then by a miracle of God...",
      fileName: "salvation.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590242/teach/salvation_piunap.webp",
    });

    this.images.push({
      id: 27,
      name: "Trustworthy Sayings & Solemnly Commands",
      description: ``,
      footer:
        "In the personal letters to Titus and Timothy, Paul gives sayings and commands...",
      fileName: "sayingsandcommands.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590247/teach/sayingsandcommands_xuhgyh.webp",
    });

    this.images.push({
      id: 28,
      name: "Natures, Kingdoms and Wills",
      description: ``,
      footer:
        "We are in the middle of a battle of two opposite wills, natures, and kingdoms...",
      fileName: "sinvswillofGod.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590252/teach/sinvswillofGod_qwzj8a.webp",
    });

    this.images.push({
      id: 29,
      name: "Slaves to Sin or Sons to Righteousness",
      description: ``,
      footer:
        "We either get what we deserve by our works or what we don't, by God's grace, through our faith in Christ...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590253/teach/slavesvssons_g5zfi7.webp",
      fileName: "slavesvssons.webp",
    });

    this.images.push({
      id: 30,
      name: "Our Jobs: Soldier, Athlete, Farmer, & Fishermen",
      description: ``,
      footer:
        "If you've always wanted to be in the military, now you can as soldiers of Christ Jesus...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590258/teach/soldierathletefarmerfishermen_ebpnk9.webp",
      fileName: "soldierathletefarmerfishermen.webp",
    });

    this.images.push({
      id: 31,
      name: "The Place of Meeting: Tabernacle",
      description: ``,
      footer:
        "We have fellowship with God in the place of meeting, we abide in Him and He in us...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590262/teach/Tabernacle_bdapzh.webp",
      fileName: "Tabernacle.webp",
    });

    this.images.push({
      id: 32,
      name: "Tester of Metals",
      description: ``,
      footer:
        "There is tribulation and fire we will all be salted with just as a sacrifice is, will we overcome...",
      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590265/teach/testerofmetals_dazuwl.webp",
      fileName: "testerofmetals.webp",
    });

    this.images.push({
      id: 33,
      name: "The Church",
      description: ``,
      footer: "We are one with Christ as Eve was one with Adam...",
      fileName: "thechurch.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590268/teach/thechurch_n6uhvl.webp",
    });

    this.images.push({
      id: 34,
      name: "The Law of Liberty",
      description: ``,
      footer:
        "Those who do what is right have no need to fear the authorities...",
      fileName: "theLaw.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590271/teach/theLaw_xtsiev.webp",
    });

    this.images.push({
      id: 35,
      name: "The Way of the Spirit: Walk and Run",
      description: ``,
      footer: "What are we rushing for will reveal what we are eagar for...",
      fileName: "theway.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590274/teach/theway_hywb5a.webp",
    });

    this.images.push({
      id: 36,
      name: "Thieves and Bandits",
      description: ``,
      footer:
        "Some wear their sin on the inside and others on the outside, yet all are with sin...",
      fileName: "thievesbandits.webp",

      originUrl:
        "https://res.cloudinary.com/dffihsa2y/image/upload/v1711590277/teach/thievesbandits_ybigmc.webp",
    });
  }
}
