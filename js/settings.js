function loadSettings(){
    var settingValues = [[]];
    console.log(settingValues)

    var settings = settingValues.map((row)=>{
        //Columns Width (must add to 100)
        const cat_w = 15;
        const det_w = 15;
        const act_w = 4;             
        const nom_w = 4; 
        const q_w = ((100-cat_w-det_w-act_w-nom_w)/4)/3;

        //Colors
        const header_c = "#C9D9F8"; //blue
        const google2 = "#f9ccd5"; //red
        const google3 = "#f4f1b2"; //yellow
        const google4 = "#cef2cb"; //green
        const button = "#4285f4" //blue

        //Icons
        const Academy_icon = "https://www.laclick.com/wp-content/uploads/2021/11/Diamond_30px.png";
        const roundtable = "";
        const summit = "";
        const workshop = "";



        var setting = {
            //Widths
            cat_w: cat_w ,
            det_w: det_w , 
            act_w: act_w ,             
            nom_w: nom_w , 
            q_w:  q_w, 
            //Colors
            header_c:header_c, //blue
            google2:google2, //red
            google3:google3, //yellow
            google4:google4, //green
            button:button,
            //Icons
            Academy_icon:Academy_icon,
        }
        return setting
    })
    return settings
}
