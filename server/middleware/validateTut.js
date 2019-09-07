/**
 * 
   const tutorial = new Tutorial({
      tutorialName: "Name",
      sections: [
         {
            sectionName: "Section name",
            sectionDetails: [
               {
                  detailHeader: "Header name",
                  detailImages: ["base 64"],
                  detailText: "Paragraph here"
               }
            ]
         }
      ],
   });
 */
function validateTut(req, res, next) {
    
    req.body.tutorialName = "tits";
    console.log(req.body);
    next();
}

module.exports = validateTutData;