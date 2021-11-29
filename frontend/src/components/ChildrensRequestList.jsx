import ChildrensTransactionListItem from "./ChildrensTransactionListItem";

export default function ChildrensRequestList(props) {
  return (
    <div>
      <h1>I am ChildrensRequestList</h1>
      <section>
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
        <ChildrensTransactionListItem />
      </section>
    </div>
  )
}