import { Component, OnInit } from "@angular/core";
interface Image {
  name?: string;
  description: string;
  footer: string;
  originUrl: string;
}
@Component({
  selector: "blog-draw-page",
  templateUrl: "./draw-page.component.html",
  styleUrls: ["./draw-page.component.scss"],
})
export class DrawPageComponent implements OnInit {
  public images: Image[] = [];
  constructor() {}

  ngOnInit(): void {
    this.images.push({
      name: "Covenant Promise",
      description: `The promise is available to everyone; we pray that many experience the promise which is through faith;
        the fulfillment of promise is in Christ, He is the Yes and Amen; we work hard to convince first ourselves then our neighbor,
        knowing this Good News is for everyone and the Word has the power to save. We obtain the promise, not by faith, which assumes
        an instance of faith, but through faith which means a progression or working of faith.
        It is BY grace we are saved, which in turn refers to an instance of grace by our Lord on the cross.`,
      footer:
        "We enter into the Covenant of Promise, the New covenant, by believing in the Promise of God...",
      originUrl: "../../assets/teach/covenantpromise.png",
    });

    this.images.push({
      name: "Being a child of the Day",
      description: ``,
      footer: "Be of the Day, a child of the Light, servants of the Lord...",
      originUrl: "../../assets/teach/daynight.png",
    });

    this.images.push({
      name: "Fear of the Lord",
      description: ``,
      footer:
        "The fear of the Lord produces humility and a righteous hatred...",
      originUrl: "../../assets/teach/fearLord.png",
    });

    this.images.push({
      name: "The Gospel",
      description: ``,
      footer:
        "Jesus has done everything for us, and we are His work, we enter into His rest...",
      originUrl: "../../assets/teach/gospel.png",
    });

    this.images.push({
      name: "Reproach, Reprove, Rebuke, Reprimand",
      description: ``,
      footer:
        "Differences between all the 're' words and understanding the prefix...",
      originUrl: "../../assets/teach/re.png",
    });

    this.images.push({
      name: "Sanctification Explained",
      description: ``,
      footer: "Moving away from earthly things to heavenly things...",
      originUrl: "../../assets/teach/sanctification.png",
    });

    this.images.push({
      name: "Sin, Righteousness, Judgement",
      description: `When we believe in Christ, our sins are forgiven by grace;
        however, it's not a means to continue on sinning deliberately and continuously while claiming grace.
        That would get us into the realm of unforgivable sins which are not covered by the Blood of Christ.
        We are made right or justified by God because of our faith in Jesus. God was not unjust when He justified us through Christ;
        When He punished His Son, we were likewise condemned on the cross, He was substituted  for us and as us;
        When we know that, we will walk in Truth through the knowledge of Christ, who is Knowledge Himself and Wisdom.
        His sacrifice is sufficient for us in order to draw us near to God.`,
      footer: "Elaborating John 16: 8-11...",
      originUrl: "../../assets/teach/john16.png",
    });

    // this.images.push({
    //   name: "Earthly man and Heavenly Man",
    //   description: `This is the most beautiful and unique archetype of Christ; it is unique because Adam is an antitype of Christ!
    //   Through adam's one act of disobedience all have been made sinners and death reigned throughout all mankind. Through another Man
    //   and His one act of obedience and righteousness, has made right many who are chosen according to their conduct even in the midst of fiery tribulation.
    //   There is something not outlined on this drawing: through Christ, all will be made alive, the living and the dead, at the resurrection of the dead in the last day.
    //   There is a resurrection of the living, those who have fallen asleep in Christ; those will rise to everlasting life.`,
    //   footer:
    //     "The Scriptures referenced here are Romans 5: 12-21; 1 Corinthians 15:20-22; 1 Corinthians 15:45-49...",
    //   originUrl: "../../assets/teach/adamvsJesus.png",
    // });

    this.images.push({
      name: "The Altar of Christ",
      description: `We were crucified with Christ and made right with God through Him when He died on the cross on our behalf, believing in the message of grace;
      therefore, by sanctification we pick up our altar or cross and follow Him, just as Isaac did when he subjected himself to his father;
      he was spared of his life and is today an example of a living sacrifice as Christ is the Lamb who was slain found standing and living (Rev 5:6).
      Here refers to the body and mind of the flesh which we have deliverance from in Christ through His death and working on the cross.`,
      footer:
        "Death must be worked out in the body and soul of the flesh. Many know about the body of the flesh. What about the mind of flesh? ...",
      originUrl: "../../assets/teach/alterofGod.png",
    });

    // this.images.push({
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
    //   originUrl: "../../assets/teach/armorofGod.png",
    // });

    this.images.push({
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
      originUrl: "../../assets/teach/baptismwaterandfire.png",
    });

    this.images.push({
      name: "Building on the Rock",
      description: `In the end, we will not be judged based on our faith, but by our actions. Our faith and actions work together.
      What good is it, to say we have faith but have no works. Can that faith help another or even save ourselves?
      No! Such a faith has no merit in reality and it is a delusion, but a faith that lives and moves and has it's being in reality is good and can save if we hold fast.
      We build our house upon the rock, if when things are good, we obey the Gospel of God: how can we stand when calamity comes if we don't even obey when things are good?
      Jesus Christ is the Rock. We believe in Him and also follow after Him: following Him is doing the things He did when He was on earth - He is the Example, He is the Way.`,
      footer:
        "How do you know if you're well built, only by the testing of calamity...",
      originUrl: "../../assets/teach/buildingontheRock.png",
    });

    // this.images.push({
    //   name: "Tabernacle Courtyard",
    //   description: `Everything in the tabernacle has a covering: the altar has the meat, the wash basin has water,
    //   the gold altar has incense, the table has bread, the lampstand has lamps with oil, the Ark of Testimony has it's covering of atonement.
    //   The item is static and it's covering is dynamic; even yet, the item is dynamic in a sense it has poles inserted.
    //   Even the Tent of Meeting itself has a covering: the only exception would be the courtyard, it has no covering.
    //   We also have a covering: Christ. He is the atonement, bread, water, light, sacrifice, and incense. We follow Him, doing everything He did.`,
    //   footer: "All items in the Tabernacle have a covering...",
    //   originUrl: "../../assets/teach/courtyard.png",
    // });

    this.images.push({
      name: "The Day of the Lord",
      description: `Of the day, we are sober, in our right mind and attentive, watchful in prayer. Those of the night are drunk, out of their right mind, unaware and foolish.
      The day of the Lord will come as a thief in the night: to those in the Day, who are watchful waiting for Him, it will be day; otherwise, it will be night to the others.
      Wouldn't it be better, you may ask, if the Lord told us when He was coming, so we would be ready? No. We are to be alert at all times, expecting His coming every day.
      Otherwise, we may think to ourselves, my Master is a long time in coming, I will take an easy and be merry. Then He will come unexpectedly, catching that one off guard, assigning him to a place with the hypocrites.
      This so called wisdom is folly.`,
      footer: "The day of the Lord vs the night of the thief...",
      originUrl: "../../assets/teach/dayoftheLord.png",
    });

    this.images.push({
      name: "Our union with Christ: past, present, and future",
      description: `We have died with Christ, crucified with Him, pinning our desires and intents of our wicked heart to the cross, putting to death our sinful nature.
      By God's gift, we have received through faith in Christ new life, having been crucified with Him and baptized in His death, buried with Him for the forgiveness of sins.
      These things are referring to the past, if we have believed they are our past. Our present life is living in death! Picking up our cross, removing dark deeds, and nailing to the cross anything fleshly & earthly within us.
      But by the resurrection of Christ, we put Him on as new clothes, and we are the living sacrifice unto God, putting on also the shinning armor of righteous living, the armor of God, living by His Spirit.
      Our future is also tied up in Christ: transformation of these lowly bodies into glorious spiritual bodies and the resurrection of the dead on the last day. We see that Christ's death must work in us so that His life will also be revealed in us.
      `,
      footer:
        "Death must work in us, so that His life will also be revealed in us...",
      originUrl: "../../assets/teach/deathandlife.png",
    });

    this.images.push({
      name: "The Spiritual Doctor",
      description: `Jesus is the Doctor, healing people by grace through faith in His name - yes, even the blind were healed, having not seen Him but only heard Him.
      That means you too, without seeing Him, can believe He is Him and be healed. He fixes our hearts, heals our bodies, and saves our souls from damnation: a total salvation.
      A physical doctor prescribes treatments that do not help with the root cause - but Jesus, fixes the issue through the forgiveness of sins by grace.
      Doctors poke and prod to come up with a diagnosis, but Jesus, the Creator, of the heart and body and mind knows the issue and fixes the underlying cause, deeper than a scalpel can reach.
      Our sickness is sin & Jesus circumcises our sinful nature, removing it from our spirits so that we would obey Him, writting on our hearts His law.
      The world prescribes 'Do this & Don't do this' for our sin problem, but they do not help with conquering one's sinful desires; Jesus completely cuts it away and loves us.`,
      footer:
        "Healthy people do not need a doctor, the sick do; I have called not the righteous but sinners to repentance...",
      originUrl: "../../assets/teach/doctors.png",
    });

    this.images.push({
      name: "Jesus, the First & Last, the Beginning & End, the Alpha & Omega",
      description: ``,
      footer:
        "Jesus was Servant of all & now, is First in heaven: Lord of Lords and King of Kings...",
      originUrl: "../../assets/teach/firstandlast.png",
    });

    this.images.push({
      name: "The Flesh: lust & pride",
      description: ``,
      footer:
        "There is sin of the flesh & also of the soul, which contains the mind...",
      originUrl: "../../assets/teach/flesh.png",
    });

    this.images.push({
      name: "The Harvest",
      description: ``,
      footer:
        "All things created by Him and for Him (see the First & Last teaching)...",
      originUrl: "../../assets/teach/harvest.png",
    });

    this.images.push({
      name: "Israelite Camp",
      description: ``,
      footer:
        "We can see teachings & parables through the creation of the Tabernacle...",
      originUrl: "../../assets/teach/israelitecamp.png",
    });

    this.images.push({
      name: "The Lion & the Lamb",
      description: ``,
      footer:
        "Similarities between Isaac and Benjamin prophesying about Jesus...",
      originUrl: "../../assets/teach/Jesuslionlamb.png",
    });

    this.images.push({
      name: "The Day of Judgement",
      description: ``,
      footer:
        "Two judgements of the righteous and the wicked, two resurrections...",
      originUrl: "../../assets/teach/judgementday.png",
    });

    this.images.push({
      name: "The Land of Inhabitation",
      description: ``,
      footer: "Which land are you currently residing in (only four options)...",
      originUrl: "../../assets/teach/land.png",
    });

    this.images.push({
      name: "One God",
      description: ``,
      footer: "One God all in all...",
      originUrl: "../../assets/teach/oneGod.png",
    });

    this.images.push({
      name: "Repent & Believe",
      description: ``,
      footer:
        "The response to the Gospel to all who have heard and believed unto new life...",
      originUrl: "../../assets/teach/repentandbelieve.png",
    });

    this.images.push({
      name: "Run the Race of Faith",
      description: ``,
      footer:
        "To live the life of faith, is to be like an athlete, running a race...",
      originUrl: "../../assets/teach/runtherace.png",
    });

    this.images.push({
      name: "Steps to Eternal Life",
      description: ``,
      footer:
        "The seed must first be planted on fertile soil then by a miracle of God...",
      originUrl: "../../assets/teach/salvation.png",
    });

    this.images.push({
      name: "Trustworthy Sayings & Solemnly Commands",
      description: ``,
      footer:
        "In the personal letters to Titus and Timothy, Paul gives sayings and commands...",
      originUrl: "../../assets/teach/sayingsandcommands.png",
    });

    this.images.push({
      name: "Natures, Kingdoms and Wills",
      description: ``,
      footer:
        "We are in the middle of a battle of two opposite wills, natures, and kingdoms...",
      originUrl: "../../assets/teach/sinvswillofGod.png",
    });

    this.images.push({
      name: "Slaves to Sin or Sons to Righteousness",
      description: ``,
      footer:
        "We either get what we deserve by our works or what we don't, by God's grace, through our faith in Christ...",
      originUrl: "../../assets/teach/slavesvssons.png",
    });

    this.images.push({
      name: "Our Jobs: Soldier, Athlete, Farmer, & Fishermen",
      description: ``,
      footer:
        "If you've always wanted to be in the military, now you can as soldiers of Christ Jesus...",
      originUrl: "../../assets/teach/soldierathletefarmerfishermen.png",
    });

    this.images.push({
      name: "The Place of Meeting: Tabernacle",
      description: ``,
      footer:
        "We have fellowship with God in the place of meeting, we abide in Him and He in us...",
      originUrl: "../../assets/teach/Tabernacle.png",
    });

    this.images.push({
      name: "Tester of Metals",
      description: ``,
      footer:
        "There is tribulation and fire we will all be salted with just as a sacrifice is, will we overcome...",
      originUrl: "../../assets/teach/testerofmetals.png",
    });

    this.images.push({
      name: "The Church",
      description: ``,
      footer: "We are one with Christ as Eve was one with Adam...",
      originUrl: "../../assets/teach/thechurch.png",
    });

    this.images.push({
      name: "The Law of Liberty",
      description: ``,
      footer:
        "Those who do what is right have no need to fear the authorities...",
      originUrl: "../../assets/teach/theLaw.png",
    });

    this.images.push({
      name: "The Way of the Spirit: Walk and Run",
      description: ``,
      footer: "What are we rushing for will reveal what we are eagar for...",
      originUrl: "../../assets/teach/theway.png",
    });

    this.images.push({
      name: "Thieves and Bandits",
      description: ``,
      footer:
        "Some wear their sin on the inside and others on the outside, yet all are with sin...",
      originUrl: "../../assets/teach/thievesbandits.png",
    });

    this.images.push({
      name: "Those who will not inherit the Kingdom",
      description: ``,
      footer:
        "Nothing of flesh and blood can inherit the kingdom, but only the new creation...",
      originUrl: "../../assets/teach/willnotinherit.png",
    });
  }
}
