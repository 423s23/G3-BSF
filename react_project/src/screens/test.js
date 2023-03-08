import Table from '../components/table';

export default function VolunteerScreen() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://us-central1-bsfapp-ca8eb.cloudfunctions.net/api/races')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setData("There was an error: " + error)
            })
    }, [])

    return(
        <React.Fragment>
            <h1>
                Members
            </h1>
            <Table raceData={data} />
        </React.Fragment>

    )
} 