import { Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

function ReactBS() {
    const [show, setShow]  = useState(true);
    if(show){
        return (
            <div>
                <Alert  variant='danger' onClose={() => setShow(false)}  dismissible>
                <Alert.Heading>
                    Suleman
                </Alert.Heading>
                Hello guys how are you fine ... brave new World.\n
                <Alert.Link href='https://www.google.com/'>
                    Google
                </Alert.Link>
            </Alert>
            </div>
        )
        
    }
    {/* return (
        <div>
            <Button>Submit</Button><br />
            <Button href='https://www.google.com/' variant='danger' size='lg' >Submit</Button>

            <Alert  variant='danger' dismissible>Hello guys how are you fine ...dasdhfksgf\shgvhj
                <Alert.Heading>
                    he iam heading
                </Alert.Heading>
                <Alert.Link href='https://www.google.com/'>
                    he iam link
                </Alert.Link>
            </Alert>
        </div>
    ) */}
}

export default ReactBS