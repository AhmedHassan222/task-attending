import CustomerList from './../CustomerList/CustomerList';
import TransactionGraph from './../TransactionGraph/TransactionGraph';
function Home() {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <CustomerList />
                </div>
                <div className="col-lg-6">
                    <TransactionGraph />
                </div>
            </div>
        </div>
    </>
}
export default Home;
