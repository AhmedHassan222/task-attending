import CustomerList from './../CustomerList/CustomerList';
import TransactionGraph from './../TransactionGraph/TransactionGraph';
function Home() {
    return <>
        <div className="container">
            <CustomerList />
            <TransactionGraph />
        </div>
    </>
}
export default Home;
