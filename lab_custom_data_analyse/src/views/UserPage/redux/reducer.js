


const initalState={
	// "targetMes":{
	"count":0,
	"user":{
			"name":"testOne",
			},
	"jobList":[],
	  "selectTarget":{
	  	"size":23
	  },
	// }
}

const targetMes =(state=initalState,action) => {
	switch(action.type) {
		case "LOAD_TARGETMES_SUCCESS":
		 return  {...state,
		 	selectTarget:
		 	{...state.selectTarget,...action.result}};
		 case "LOAD_JOBLIST_SUCCESS":
		 return{
		 	...state,...action.result
		 }
		default:
		return state
	}
}

export default {initalState,targetMes};
