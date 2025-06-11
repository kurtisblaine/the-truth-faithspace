import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ReferenceTooltipComponent } from "../../../shared/components/reference-tooltip/reference-tooltip.component";

@Component({
  selector: "gospel-persevere",
  imports: [CommonModule, ReferenceTooltipComponent],
  template: `<ng-container *ngTemplateOutlet="perseverance"></ng-container>
    <ng-template #perseverance>
      Humans are forgetful, not some of us, but all of us. Want proof? Look at all the libraries filled with books - we
      write things down so that we don't forget. What enters into our minds soon leaves it, unless it is constantly
      remembered, acted upon, and sharpened. Likewise, we have truth within us that requires constant remembering so
      that we don't forget. If we leave this earth, forgetting what we first heard, then we have believed in vain, and
      received God's grace in vain, because we did not hold fast the testimony until the end. It is one thing to hold
      fast, and another thing to continually grow in the knowledge of our Lord and Savior, building upon Him, our
      foundation. We ought not be the one who forgets the Gospel, the one who has to keep being reminded of the
      elementary fundamentals of God's Word over and over, having become dull of hearing, sluggish or indifferent.
      Instead, we should constantly remember by the use of the truth, confessing the word in deed and in truth. As the
      apostle James says,
      <blog-reference-tooltip [reference]="'James 1:22-25'">
        But be doers of the word, and not hearers only, deceiving yourselves. For if anyone is a hearer of the word and
        not a doer, he is like a man observing his natural face in a mirror; for he observes himself, goes away, and
        immediately forgets what kind of man he was. But he who looks into the perfect law of liberty and continues in
        it, and is not a forgetful hearer but a doer of the work, this one will be blessed in what he does.
      </blog-reference-tooltip>
      So we remember who we are in Christ by acting upon the Word. There is a stark warning in the letter of the Hebrews
      written, as it says,
      <blog-reference-tooltip [reference]="'Hebrews 5:12-14'">
        For though by this time you ought to be teachers, you need someone to teach you again the first principles of
        the oracles of God; and you have come to need milk and not solid food. For everyone who partakes only of milk is
        unskilled in the word of righteousness, for he is a babe. But solid food belongs to those who are of full age,
        that is, those who by reason of use have their senses exercised to discern both good and evil.
      </blog-reference-tooltip>
      And it says in the admonishment by the brother and apostle in the faith, Peter,
      <blog-reference-tooltip [reference]="'2 Peter 1:5-9'">
        For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge; and to
        knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness; and to godliness,
        mutual affection; and to mutual affection, love. For if you possess these qualities in increasing measure, they
        will keep you from being ineffective and unproductive in your knowledge of our Lord Jesus Christ. But whoever
        does not have them is nearsighted and blind, forgetting that they have been cleansed from their past sins.
      </blog-reference-tooltip>
      For our knowledge of the Lord is for us to be effective and yield fruit unto God for His glory.<br /><br />

      The Psalms of Asaph (Psalms chapters 73 to 83) show us the importance of remembering the Lord's deeds. In fact,
      the Israelites fell into sin because they forgot the LORD's deeds when He rescued them out of Egypt. The
      Israelites remembered the Lord's works through annual festivals like the Passover which God ordained as
      testimonies to them; as Samuel said,
      <blog-reference-tooltip [reference]="'1 Samuel 12:24'">
        Only fear the LORD and serve Him in truth with all your heart; for consider what great things He has done for
        you.
      </blog-reference-tooltip>
      Today, we have the Lord's Supper or Communion to remember what Jesus has done for us on the cross, breaking His
      body and pouring out His life for us; this is not given on a set day, but anyday we like - that we may meditate
      upon the Lord and His work for us. These Psalms show us the importance of not forgetting what we heard at first. I
      charge you in the Lord to read the Book of Hebrews which calls all believers to hold fast the confession and the
      hope of Christ, persevering in the Lord until the end. We remember the Lord and what He has done for us through
      the confession of our lips, proclaiming His deeds to our neighbors, to our household through the testimony He has
      given us of His grace and by His grace. For we did not discover the mystery of the gospel ourselves, but we have
      come to the understanding of it through others, namely the apostles. So thus, we ought to be always growing in
      love, faith and good works unto all people, especially those in the household of faith; if we grow in these ways,
      we will not be ineffective in our knowledge of the Lord Jesus Christ as we await for His coming. We have many
      great examples of patience and perseverance; as the apostle James provides examples, he says,
      <blog-reference-tooltip [reference]="'James 5:7-11'">
        Be patient, then, brothers and sisters, until the Lord’s coming. See how the farmer waits for the land to yield
        its valuable crop, patiently waiting for the autumn and spring rains. You too, be patient and stand firm,
        because the Lord’s coming is near. Don’t grumble against one another, brothers and sisters, or you will be
        judged. The Judge is standing at the door! Brothers and sisters, as an example of patience in the face of
        suffering, take the prophets who spoke in the name of the Lord.
        <b
          >As you know, we count as blessed those who have persevered. You have heard of Job’s perseverance and have
          seen what the Lord finally brought about. The Lord is full of compassion and mercy.</b
        >
      </blog-reference-tooltip>
      And the apostle Paul was constantly reminding the church of the gospel in his letters, as he says in one place,
      <blog-reference-tooltip [reference]="'1 Corinthians 15:1-8'">
        Now I make known to you, brethren, the gospel which I preached to you, which also you received, in which also
        you stand, by which also you are saved, if you hold fast the word which I preached to you, unless you believed
        in vain. For I delivered to you as of first importance what I also received, that Christ died for our sins
        according to the Scriptures, and that He was buried, and that He was raised on the third day according to the
        Scriptures, and that He appeared to Cephas, then to the twelve. After that He appeared to more than five hundred
        brethren at one time, most of whom remain until now, but some have fallen asleep; then He appeared to James,
        then to all the apostles; and last of all, as to one untimely born, He appeared to me also. </blog-reference-tooltip
      ><br /><br />

      Remember, it is not how we start the race, but how we finish. The one who starts strong, but does not finish, does
      not win; and the one who starts weak, but finishes first, certainly will win the prize. Do not the Scriptures say
      the same thing? Was not the thief on the cross counted righteous, even at the end of His life, and received the
      promise of Paradise? What about the prophecy in Ezekiel; as it says,
      <blog-reference-tooltip [reference]="'Ezekiel 18:21-24'">
        But if the wicked man turns from all his sins which he has committed and observes all My statutes and practices
        justice and righteousness, he shall surely live; he shall not die. All his transgressions which he has committed
        will not be remembered against him; because of his righteousness which he has practiced, he will live. Do I have
        any pleasure in the death of the wicked," declares the Lord GOD, "rather than that he should turn from his ways
        and live? But when a righteous man turns away from his righteousness, commits iniquity and does according to all
        the abominations that a wicked man does, will he live? All his righteous deeds which he has done will not be
        remembered for his treachery which he has committed and his sin which he has committed; for them he will die.
      </blog-reference-tooltip>
      So if the wicked turns to righteousness, his wickedness will be forgotten; and if the righteous turns to sin, his
      righteousness will be forgotten. The race is from start to finish by faith; it is no triathlon where you switch
      between biking, swimming, and running - no! How we begin is how we finish - if we start the race by faith and we
      received the Spirit by faith, then we finish in the Spirit by faith. Therefore, let no-one deceive you: how we die
      is how we will be raised. It is through constant remembrance of the fact of the truth that we persevere. If we are
      born of God, He will keep us; but I ask, "How do you know you are born of God?" You are proven by keeping His Word
      until the end. As it says, “They went out from us, but they were not really of us; for if they had been of us,
      they would have remained with us; but they went out, so that it would be shown that they all are not of us.” (1
      John 2:19) Furthermore, do you remember these exhortations in the Scriptures? As the apostle John says,
      <blog-reference-tooltip [reference]="'1 John 3:9'">
        No one who is born of God practices sin, because His seed abides in him; and he cannot sin, because he is born
        of God.
      </blog-reference-tooltip>
      For "The Lord is faithful, and He will strengthen and protect you from the evil one.” (2 Thessalonians 3:3) And as
      the Lord says,
      <blog-reference-tooltip [reference]="'John 10:28-29'" [isJesusWord]="true">
        I give eternal life to them, and they will never perish; and no one will snatch them out of My hand. My Father,
        who has given them to Me, is greater than all; and no one is able to snatch them out of the Father's hand.
      </blog-reference-tooltip>
      And concerning the new covenant, it says, “I will make an everlasting covenant with them that I will not turn away
      from them, to do them good; and I will put the fear of Me in their hearts so that they will not turn away from
      Me.” (Jeremiah 32:40) For the fear of the LORD God is for our good: to preserve us unto eternal life. Furthermore,
      “If his sons forsake My law And do not walk in My judgments, If they violate My statutes And do not keep My
      commandments, Then I will punish their transgression with the rod And their iniquity with stripes. But I will not
      break off My lovingkindness from him, Nor deal falsely in My faithfulness.” (Psalms 89:30-33) For I am convinced,
      even if our head is destroyed, and the functioning of our brain grows dim, and our bodies utterly perish in fire,
      we who believe with the heart won't be crushed nor destroyed - our faith in the heart will not be taken away. For
      the enemy may destroy the body, but can do nothing more thereafter: for the body of flesh belongs to the ground,
      but the body of the spirit belongs to God.
    </ng-template>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersevereComponent {}
