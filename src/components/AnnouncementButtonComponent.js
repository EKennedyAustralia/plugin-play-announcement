import React from "react";
import { withTaskContext } from '@twilio/flex-ui';
import Button from '@material-ui/core/Button';
import axios from 'axios';



class AnnouncementButtonComponent extends React.Component {

  constructor (props) {
    super(props)


  }

  updateCall = () => {
  
    var confSID = this.props.task.attributes.conference.sid;
    var BASE_URL = this.props.manager.configuration.serviceBaseUrl;
    console.log(BASE_URL);
    console.log(confSID)

    //replace URL if your not using functions classic as the serverless domain will not be the same as your flex domain
    axios.get(`https://${BASE_URL}/announcement?Sid=${confSID}`);
                                                                    
  }
  
  render() {



    return (
    <div>
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.updateCall()}
            size="small"
          >
           Play Recorded Announcement 
          </Button>


    </div>
    )
  }
}


export default withTaskContext(AnnouncementButtonComponent);
