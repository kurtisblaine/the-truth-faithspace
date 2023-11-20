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
      name: "Sin, Righteousness, Judgement",
      description: `When we believe in Christ, our sins are forgiven by grace;
        however, it's not a means to continue on sinning deliberately and continuously while claiming grace.
        That would get us into the realm of unforgiveable sins which are not covered by the Blood of Christ.
        We are made right or justified by God because of our faith in Jesus. God was not unjust when He justified us through Christ;
        When He punished His Son, we were likewise condemned on the cross, He was subsituted for us and as us;
        When we know that, we will walk in Truth through the knowledge of Christ, who is Knowledge Himself and Wisdom.
        His sacrifice is sufficient for us in order to draw us near to God.`,
      footer: "Elaberating John 16: 8-11...",
      originUrl: "../../assets/teach/john16.png",
    });

    this.images.push({
      name: "Earthly man and Heavenly Man",
      description: `This is the most beautiful and unique archetype of Christ; it is unique because Adam is a contrapositive of Christ!
      Through adam's one act of disobedience all have been made sinners and death reigned throughout all mankind. Through another Man
      and His one act of obedience and righteousness, has made right many who are chosen according to their conduct even in the midst of firey tribulation.
      There is something not outlined on this drawing: through Christ, all will be made alive, the living and the dead, at the resurrection of the dead in the last day.
      There is a resurrection of the living, those who have fallen asleep in Christ; those will rise to everlasting life.`,
      footer:
        "The Scriptures referenced here are Romans 5: 12-21; 1 Corinthians 15:20-22; 1 Corinthians 15:45-49...",
      originUrl: "../../assets/teach/adamvsJesus.png",
    });

    this.images.push({
      name: "The Altar of Christ",
      description: `We were crucified with Christ and made right with God through Him when He died on the cross on our behalf, believing in the message of grace;
      therefore, by sanctification we pick up our altar or cross and follow Him, just as Isaac did when he subjected himself to his father;
      he was spared of his life and is today an example of a living sacrifice as Christ is the Lamb who was slain found standing and living (Rev 5:6).
      Here refers to the body and mind of the flesh which we have deliverence from in Christ through His death and working on the cross.`,
      footer:
        "Death must be worked out in the body and soul of the flesh. Many know about the body of the flesh. What about the mind of flesh? ...",
      originUrl: "../../assets/teach/alterofGod.png",
    });

    this.images.push({
      name: "The Armor of God",
      description: `When David went to go fight Goliath, he was given armor by Saul which did not fit him, Saul was too big and David was smaller than Saul.
      Anyway, David had armor on which was from God, an armor that is fitting for a man of God. The armor is for protection. What good are we if we are hurt in battle?
      Can we fight from the hospital bed? The war has been won by Christ on the cross and we join into his victory through faith. This is all seen in the book of Colossians.
      Christ's victory is absolute, but we may be defeated. Why? Because we have not been perfected by our faith in the grace of God. We STAND on victory ground;
      we firstmost need to fight to conquer the land that God has promised us -- the battle of faith, the good fight (1 Tim 6:12).
      In the book of Joshua, the Israelites had to go into the land and defeat the enemy. God promised them, He would fight for them.
      They needed to put their faith to action and go. God will not let anyone of us down who put their trust in Him.`,
      footer:
        "The Armor given to us by God, which is fitting for a Christian, unlike the armor Saul gave to David...",
      originUrl: "../../assets/teach/armorofGod.png",
    });

    this.images.push({
      name: "You must be Born again of Water and Fire",
      description: `The baptism of water is that of repentance. John the Baptist was the first apostle sent by God to proclaim water baptism, confession of sin and
      repentance thereof. He preached that we should believe in the One to come after him. The 12 were sent by God baptizing and making disciples after witnessing Him.
      There is another baptism of fire which is of the Spirit and includes tribulation and refining from impurities. Jesus is the One Who baptized in the Spirit.
      We are saved (1 Peter 3:21) through water as Noah and his family were saved through the deluge. In the future when the world is judged by fire,
      we will be caught up in the heavens and will not perish along with the rest of the world. The main point of baptism in water is an appeal to God for a good coinscience.
      Our coinscience has been defiled and corrupted from this world and it's neccessary to appeal to God for a cleansed one through Christ's sacrifice.
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
      description: ``,
      footer:
        "How do you know if you're well built, only by the testing of calamity...",
      originUrl: "../../assets/teach/buildingontheRock.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/courtyard.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/dayoftheLord.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/deathandlife.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/doctors.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/firstandlast.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/flesh.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/harvest.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/israelitecamp.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/Jesuslionlamb.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/judgementday.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/land.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/oneGod.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/repentandbelieve.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/runtherace.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/salvation.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/sayingsandcommands.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/sinvswillofGod.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/slavesvssons.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/soldierathletefarmerfishermen.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/Tabernacle.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/testerofmetals.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/thechurch.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/theLaw.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/theway.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/thievesbandits.png",
    });

    this.images.push({
      name: "",
      description: ``,
      footer: "...",
      originUrl: "../../assets/teach/willnotinherit.png",
    });
  }
}
