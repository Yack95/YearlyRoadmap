function loadCategories(){
  
  var categoryDataSheet = SpreadsheetApp.getActive().getSheetByName("Categories");
  var categoryValues = categoryDataSheet.getRange(2,1, categoryDataSheet.getLastRow()-1, categoryDataSheet.getLastColumn()).getDisplayValues();
  
  var activities = loadActivityData()
  
  var categories = categoryValues.map((row)=>{
   var category = {
       categoryId:row[0],
       categoryName: row[1],
       targetLevel: row[2],
       activities:activities[row[0]] || [],
   }
   category.numberOfActivities = category.activities.length;
   return category     
  })
  console.log("return", categories)
  return categories
  
  
}



function loadActivityData(){
  
  var activityDataSheet = SpreadsheetApp.getActive().getSheetByName("Activities");
  var activityValues = activityDataSheet.getRange(2,1, activityDataSheet.getLastRow()-1, activityDataSheet.getLastColumn()).getDisplayValues();
  
  var events = loadEventData();
  
  var activities = activityValues.map((row)=>{
    var activity = {
     categoryId: row[0],
     programId:row[1],
     programName:row[2],
     programDescription:row[3],
     programURL:row[4],
     googlePOC:row[5],
     nominateURL:row[6],
     events: events[row[1]] || [],
    }   
    return activity                                        
  })
  
  const grouppedActivities = {}
  
 
  activities.forEach((activity)=>{
   
   //or there is already an array of events for that activity
  
   if(grouppedActivities[activity.categoryId]){
    
    grouppedActivities[activity.categoryId].push(activity)
   
  }else{
    //or we have only the first event
    grouppedActivities[activity.categoryId] = [activity]
  }
                     
                
  })
  
  //console.log("Groupped Activity", grouppedActivities)
  return grouppedActivities
  
}

function loadEventData(){
  
  var eventDataSheet = SpreadsheetApp.getActive().getSheetByName("Events");
  var eventValues = eventDataSheet.getRange(2,1, eventDataSheet.getLastRow()-1, eventDataSheet.getLastColumn()).getDisplayValues();
  
  //console.log("eventValues", eventValues)
  var events = eventValues.map((row)=>{
    const eventDatum = row[2].split('.') // this will give us an array ["10", "03", "2022"]
    var event = {
     eventName: row[0],
     activityId: row[1],
     startDate:row[2], 
     eventType:row[3],
     aejName:row[4],
     startMonth: Number(eventDatum[1]),
     startMargin: Number(eventDatum[0])*3  // for 31 -> we will use margin-left 93% inside the cell
    }
    return event
  })
  
  //to give the array of objects where the key is the activityId
  
  const grouppedEvents = {}
  
  events.forEach((event)=>{
                    
   //or there is already an array of events for that activity
   if(grouppedEvents[event.activityId]){
     grouppedEvents[event.activityId].push(event)
   }else{
    //or we have only the first event
    grouppedEvents[event.activityId] = [event] 
     
   }
    
    
  })
  
  //console.log("grouppedEvents", grouppedEvents)
  return grouppedEvents
}
