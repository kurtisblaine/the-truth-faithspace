import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LinkComponent } from "shared";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";
import { GospelContentBaseComponent } from "../gospel-content.base.component";

@Component({
  selector: "gospel-born-again",
  imports: [CommonModule, ReferenceTooltipComponent, LinkComponent],
  template: `<div>
    The Holy Spirit has many names and titles: the Helper, the Spirit of Truth, the Spirit of Grace, the Spirit of
    Holiness. He unites with our spirit, making our bodies into Temples filled with God's Presence: He makes us holy by
    His glorious Presence. The Holy Spirit leads us into all truth and searches out the deep mysteries of God, hidden in
    the Scriptures, so that we may know all that is ours freely in Christ Jesus. Those taught by God come to Christ; for
    it is only the Father that can reveal Christ to us; as Christ told Peter,
    <blog-reference-tooltip [reference]="'Matthew 16:16'" [isJesusWord]="true">
      Blessed are you, Simon Barjona, because flesh and blood has not revealed this to you, but my Father who is in
      heaven.
    </blog-reference-tooltip>
    The Holy Spirit testifies to Jesus Christ; and He convicts the world concerning sin and righteousness and judgment;
    as Christ said,
    <blog-reference-tooltip [reference]="'John 7:7'" [isJesusWord]="true">
      The world cannot hate you, but it hates Me because I testify of it, that its deeds are evil.
    </blog-reference-tooltip>
    The Holy Spirit is the Spirit of Jesus and the Spirit of the Father. If we have fellowship with the Son, our
    fellowship is with the Father as well. For the Son abides in the Father and the Father in the Son. We abide in the
    Son. And we have fellowship with the Son and with the Father through the Spirit; so if we wish to remain in
    fellowship, we must remain in the light; we remain in the light by confessing our sins; all sin is darkness; if we
    wish to remain in the light, we must not sin; if we do sin, we confess our sins; for if we confess our sins and do
    not lie, He is faithful and just to forgive us our sins, and the blood of Jesus cleanses us from all our sins.
    Forgiveness is not just once at faith, but it is continual through faith; and this is how we are forgiven: by our
    confession. For we believe God exists and sees the unseen, so we confess our sins to Him. On God's part, we are
    forgiven by His grace, but on our part, by remaining in the light. Know that the Lord God sees the darkness as light
    - so how vain it is to try to hide from Him! So therefore, remain in the light. Christ Jesus has been exalted to the
    right hand of the Father, and He no longer walks with man; however, He has sent forth His Spirit; many followed
    Christ while He walked on earth, but today, we follow Christ by the inward compulsion of the Spirit - for He lives
    in us who believe. For the Holy Spirit comes when we believe; as the apostle says,
    <blog-reference-tooltip [reference]="'Ephesians 1:13-14'">
      And you also were included in Christ when you heard the message of truth, the Gospel of your salvation. When you
      believed, you were marked in him with a seal, the promised Holy Spirit, Who is a deposit guaranteeing our
      inheritance until the redemption of those who are God’s possession—to the praise of His glory.
    </blog-reference-tooltip>
    <lib-link [link]="baseUrl + '/drawings/draw/john16'">(See more on John 16)</lib-link>
    <br /><br />

    If we are born of God, we do not need to be taught the truth because the Holy Spirit testifies to us what is true,
    for He is the Spirit of Truth; so we may instinctively know the difference between truth and lies because of the
    anointing we have received from Him. In His grace, He has also given to us teachers and evangelists and prophets and
    apostles. Know for certain: He will cause us to obey the truth. The Holy Spirit will lead us out of the world to be
    a set apart vessel for God's service. To say the same thing in another way: the Holy Spirit makes us holy. Do not be
    deceived, but test the spirits to see if they come from God. There is one Spirit and one Gospel; if you have
    believed, you know certainly that the Gospel is from God. He speaks with us to lead us and guide us; for He was with
    us, but now He is away from us - yet He is among us. Jesus is our Teacher; and the Spirit of our Teacher is within
    us who believe; The Spirit speaks the Word of God and He causes the Word of God to come into our remembrance; as it
    says,
    <blog-reference-tooltip [reference]="'Isaiah 30:20-21'">
      He, your Teacher will no longer hide Himself, but your eyes will behold your Teacher. Your ears will hear a word
      behind you, "This is the way, walk in it," whenever you turn to the right or to the left.
    </blog-reference-tooltip>
    And speaking of the teachings, it says,
    <blog-reference-tooltip [reference]="'Proverbs 6:22'">
      When you walk about, they will guide you; When you sleep, they will watch over you; And when you awake, they will
      talk to you.
    </blog-reference-tooltip>
    So we are not left as orphans, even though He is not with us in body; He has been exalted to heaven, and He is with
    us in Spirit.
    <br /><br />

    The Word of Truth is united in us by faith, and we are born anew by the eternal Word implanted; as the apostle says,
    <blog-reference-tooltip [reference]="'1 Peter 1:22-25'">
      Having been born again, not of corruptible seed but incorruptible, through the word of God which lives and abides
      forever, because “All flesh is as grass, And all the glory of man as the flower of the grass. The grass withers,
      And its flower falls away, But the word of the LORD endures forever.” Now this is the word which by the gospel was
      preached to you.
    </blog-reference-tooltip>
    The Word of Truth comes from the Spirit of Truth, and those who have God's Spirit speak the Words of Him, for they
    have the mind of Christ (1 Corinthians 2:16). If we are not born of Him, we do not belong to Him and we are not
    truly His children (Romans 8:9). It is necessary for our heart and body to be washed - and our body and spirit is
    washed with the pure water of the Word. The Holy Spirit of God cannot abide in an unclean vessel. That's why water
    usually precedes the Spirit - but not always. But this I know: the Spirit of Purity cannot dwell with impurity. But
    we have been washed and converted through faith in the Son of God who loves us. There are different times when
    people received the Spirit (either before water baptism or after water baptism). But to tell with the words of the
    apostle, as he says,
    <blog-reference-tooltip [reference]="'Romans 3:28,29'">
      There is one God who will justify the circumcised <b>by</b> faith and the uncircumcised <b>through</b> faith.
    </blog-reference-tooltip>
    So the Jews and God-fearing Gentiles, received the Spirit at an instance of faith, but the Gentiles worked through
    faith to obedience. And so it is: the Word of God leads us to sanctification either by faith or through faith (Acts
    26:18); but nevertheless, it is faith. That is why before Jesus' exaltation the Lord commanded His disciples to
    teach and observe all that He commanded, baptizing in the name of the Father and the Son and the Holy Spirit
    (Matthew 28:19-20). For it is the Word of God which sanctifies - not by hearing alone, but by hearing with faith.
    The baptism into Christ is a baptism into His teaching - an immersion into His Word by a washing of the water of the
    Word. Through God's Word, we can repent and believe. For we believe by God's Word, and we repent by God's Word, for
    we believe in God's Son. Those who believe His Word obey His Word; and those who obey Him are born of Him; as it
    says, "We are witnesses of these things; and so is the Holy Spirit, whom God has given to those who obey Him." (Acts
    5:32) Faith is obedience; for this is the commandment of God: to believe in the Son (John 6:29). As John, the
    apostle, says, “This is His commandment, that we believe in the name of His Son Jesus Christ, and love one another,
    just as He commanded us.” (1 John 3:23) For “Whoever believes that Jesus is the Christ is born of God, and whoever
    loves the Father loves the child born of Him.” (1 John 5:1) “For whatever is born of God overcomes the world; and
    this is the victory that has overcome the world—our faith.” (1 John 5:4) God is love, and God alone is righteous.
    Everyone who is born of the Father resembles Him; for children resemble their father; as it says, “Beloved, let us
    love one another, for love is from God; and everyone who loves is born of God and knows God.” (1 John 4:7) “If you
    know that He is righteous, you know that everyone also who practices righteousness is born of Him.” (1 John 2:29)
    <br /><br />

    If your desire is eternal life, you must be born of water and the Spirit; as Jesus says,
    <blog-reference-tooltip [reference]="'John 3:5-7'" [isJesusWord]="true">
      Most assuredly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God. That
      which is born of the flesh is flesh; and that which is born of the Spirit is spirit.
    </blog-reference-tooltip>
    It was John who was the first to preach a baptism of repentance, which is a baptism of water; this is what it means
    to be "Born of water". It is a baptism of repentance into water. John baptized with a baptism in his own name, but
    he pointed to the Messiah to come (Acts 19:4); I say, "In his own name", but that is only because the Messiah had
    not yet been revealed; and since there was no other name to go by, the baptism was called "John's baptism" (Acts
    19:3). But when the Messiah came, men were baptized into Him; and His name is revealed as Jesus, "For He will save
    His people from their sins." (Matthew 1:21) But Jesus did not baptize anyone in water, for His disciples did (John
    4:2). So you could say: John was the first disciple of Christ. For he was teaching that men should repent and he
    pointed them to Christ who was to come. But when John knew the Messiah, he confessed, "Behold, the Lamb of God!”
    (John 1:29) So there isn't much of a difference between John and a disciple, except that John first preached without
    knowing the Messiah. And He prepared the way for His coming. For John was preaching that men might believe through
    him; as it says of him, “He came as a witness, to testify about the Light, so that all might believe through him.”
    (John 1:7) And Jesus praying for His disciples, said,
    <blog-reference-tooltip [reference]="'John 17:20'">
      I do not ask on behalf of these alone, but for those also who believe in Me through their word.
    </blog-reference-tooltip>
    So we see that John and a disciple of Christ preach that men might believe through them; so they are the same in
    that way, for we point not to ourselves, but to Christ; as the apostle Paul says, “We do not preach ourselves but
    Christ Jesus as Lord, and ourselves as your bond-servants for Jesus' sake.” (2 Corinthians 4:5) And as John also
    said, "He must increase, but I must decrease.” (John 3:30) And furthermore, John was sent to preach repentance and a
    baptism in water; as it says of him, "He who sent me to baptize in water..." (John 1:33) And likewise Christ's
    disciples are sent into the world to preach and baptize; as Jesus said,
    <blog-reference-tooltip [reference]="'Mark 16:15-16'" [isJesusWord]="true">
      Go into all the world and preach the gospel to all creation. He who has believed and has been baptized shall be
      saved; but he who has disbelieved shall be condemned.
    </blog-reference-tooltip>
    So the ministry of the disciples is to preach and baptize - and the ministry was first given to John then to the
    disciples. And furthermore, before John was sent, he was filled with the Holy Spirit, even from his mother's womb
    (Luke 1:15); and Christ's disciples waited in Jerusalem until power from heaven came (Acts 1:4-5). So again, both
    John and the disciples of Christ had power from on high for the work of the ministry; for the Spirit is sent for the
    work of the ministry. So who can say, "John was not a disciple of Christ"? For he exemplified a disciple perfectly,
    and more than a disciple: for he preached that men should repent, and he baptized in water, and he pointed to
    Christ. This is what it means to be "born of water", that is: repentance towards God and baptism into Christ; and
    this is the work of His disciples. So John first preached a baptism of repentance, but no-one could turn to Christ
    when John first preached, because they did not know who the Christ was. For how can you turn to someone that you
    don't know? Nevertheless, John told them to believe in Him who was to come. But when Jesus was revealed to Israel,
    they turned to Him and followed Him. So when Christ was revealed, the baptism changed from a baptism of repentance
    to a baptism of faith in Jesus. For repentance is "turning from" and faith is "turning to"; and no-one can ever
    "turn to" without first "turning from". So therefore, repentance precedes faith. And both repentance and faith come
    from hearing the Word of Christ. For repentance is a change of mind; how can anyone change their mind except through
    words? As food is for the belly, so words are for the mind; so likewise it says of faith, “Faith comes from hearing,
    and hearing by the word of Christ.” (Romans 10:17) So if anyone truly has faith, it is because they have first
    repented. And everything which is true has evidence as being true. There is no such thing as faith without
    repentance. Or can you face two directions at once?
    <br /><br />

    No-one can turn to Christ without first turning from devils. The way of Christ and the way of devils are two
    opposite ways; they are diametrically opposed and do not overlap even in the slightest. If anyone has disagreement,
    I ask: if you cannot withstand water, how can you withstand fire? For I mentioned Christ did not baptize anyone in
    water, as John was saying, "As for me, I baptize you with water; but One is coming who is mightier than I, and I am
    not fit to untie the thong of His sandals; He will baptize you with the Holy Spirit and fire.” (Luke 3:16) Just as
    it is written in the law, “Everything that can stand the fire, you shall pass through the fire, and it shall be
    clean, but it shall be purified with water for impurity. But whatever cannot stand the fire you shall pass through
    the water.” (Numbers 31:23) And the sacrifices given on the altar were first washed with water, both the entrails
    and the legs, then burned with fire. And Christ said while He was washing the disciple's feet,
    <blog-reference-tooltip [reference]="'John 13:10'" [isJesusWord]="true">
      He who has bathed needs only to wash his feet, but is completely clean; and you are clean, but not all of you.
    </blog-reference-tooltip>
    And later He said,
    <blog-reference-tooltip [reference]="'John 15:3'" [isJesusWord]="true">
      You are already clean because of the word which I have spoken to you.
    </blog-reference-tooltip>
    Then He says,
    <blog-reference-tooltip [reference]="'Mark 9:49'" [isJesusWord]="true">
      For everyone shall be salted with fire, and every sacrifice shall be salted with salt.
    </blog-reference-tooltip>
    (The apostle Paul was saying such things as these too, namely that, we are a sacrifice to God: Philippians 2:17,
    Romans 12:1) And furthermore, Israel was led to cross over through water into the desert; as the apostle says, “All
    were baptized into Moses in the cloud and in the sea;” (1 Corinthians 10:2) So water is first for purifying, then
    fire - water first then the Spirit. Water is first for cleansing, then comes the Spirit for sanctifying. As the
    Psalmist says about this: “We went through fire and through water, Yet You brought us out into a place of
    abundance.” (Psalms 66:12) So they were led out of Egypt by the pillar of God through water; and they were led to
    wander in the wilderness by the Spirit, where they were tested. So it is, beloved: we who were formerly unclean,
    have been washed and cleansed by God's Word - and through Him, He has turned our hearts unto Himself. And we, if we
    are being led by Him, are led into a great wilderness as nomads for the testing of our faith.
    <br /><br />

    Although the Scriptures speak this way about being baptized into water and fire, it may sound quite fearful, but
    listen to the promise of God, and know that if you follow Him, He will be with you: as He says, "When you pass
    through the waters, I will be with you; And through the rivers, they will not overflow you. When you walk through
    the fire, you will not be scorched, Nor will the flame burn you.” (Isaiah 43:2) If the old life were sufficient,
    there would be no need for a new one. But “Blessed be the God and Father of our Lord Jesus Christ, who according to
    His great mercy has caused us to be born again to a living hope through the resurrection of Jesus Christ from the
    dead.” (1 Peter 1:3) For just as Elisha raised the dead, even from his tomb, for a corpse was thrown into his tomb
    and the body of that corpse stood up (1 Kings 13:21)! And so we are buried with Him through baptism. For we who have
    been taught, have been taught to turn to Christ, to pass from death to life, and to be immersed into His teachings.
    For we who have tasted, have tasted the good word of God and have become partakers of it. For the Word of God is
    powerful and able to revive us through the resurrection of Jesus Christ. As the LORD God commands: "I, the LORD, am
    your God, Who brought you up from the land of Egypt; Open your mouth wide and I will fill it.” (Psalms 81:10) And as
    the apostle says,
    <blog-reference-tooltip [reference]="'1 Corinthians 12:13'">
      For by one Spirit we were all baptized into one body, whether Jews or Greeks, whether slaves or free persons, and
      <b>all were made to drink one Spirit.</b>
    </blog-reference-tooltip>
    <lib-link [link]="baseUrl + '/drawings/draw/baptismwaterandfire'">(See more on Baptisms)</lib-link>
    <br /><br />

    I urge you then, by the mercies of God, to humbly accept the Word of God implanted which has the power to save.
    Believe through me, and if you find any fault in me, I point to the faultless one - Christ Jesus - that you may
    believe in Him; for your sakes I have made these many writings, for I wish for you to be converted. I am not the
    light, but I testify to the Light - for the lesser light in the darkness points to the great Light of the day. We
    are living in the day of darkness; the day of His light is coming. I urge you then, by the mercies of God: to be
    reconciled to God (2 Corinthians 5:20), for He has reconciled you (2 Corinthians 5:19); and repent and be baptized
    for the remission of sins (Acts 2:38), for He has forgiven you (1 Corinthians 15:3); and reckon yourself to be dead
    to sin (Romans 6:11), for He has died for you (2 Corinthians 5:14); you were crucified with Him (Galatians 2:20), so
    crucify the flesh with its passions and desires (Galatians 5:24); and save yourself from this wicked generation
    (Acts 2:40), for He has saved us, not on the basis of deeds which we have done (Titus 3:5); and belong to Him (2
    Corinthians 5:15), for He has purchased you (1 Corinthians 6:20). Draw near unto Him (James 4:8), for He has drawn
    near to you (1 Timothy 1:15). And humble yourself (James 4:10), for He has come down from heaven (Philippians
    2:5-8). And offer yourself as a living sacrifice to God (Romans 12:1), for Jesus Christ was Sacrificed for you (1
    Corinthians 5:7). And walk as His obedient children (1 Peter 1:14), for you are born of Him (1 John 5:1).
  </div>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BornAgainComponent extends GospelContentBaseComponent {
  override name: string = "born-again";
}
