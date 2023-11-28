function studentDetails(name,rollNo,cLass,section,mark) {

    this.name = name;
    this.rollNo = rollNo;
    this.cLass = cLass;
    this.section = section;
    this.mark = mark;

}

function Marks (science,maths,socialScience,english,hindi) {
      this.science = science;
      this.maths = maths;
      this.socialScience = socialScience;
      this.english = english;
      this.hindi = hindi;

   }

  let mark1 = new Marks(89,80,50,90,89);

   let student1 = new studentDetails("sagar",34,"X","A",mark1);
    
 function reportCard() {
      console.log("*Report Card*"+"\n"+"Name : "+student1.name+"\n"+"Roll NO : "
      +student1.rollNo+"\n"+"Class :"+student1.cLass+
      "\n"+"Section : "+student1.section+"\n"+"Science : "
      +student1.mark["science"]+"\n"+"Maths : "
      +student1.mark["maths"]+"\n"+"SocialScience : "
      +student1.mark["socialScience"]+"\n"+"Ennglish : "
      +student1.mark["english"]+"\n"+"Hindi : "
      +student1.mark["hindi"]);
       }
       
   reportCard();