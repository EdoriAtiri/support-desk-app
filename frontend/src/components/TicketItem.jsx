import { Link } from 'react-router-dom'

function TicketItem({ ticket }) {
  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString()}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/tickets/${ticket._id}`} className="btn vtn-reverse btn-sm">
        View
      </Link>
    </div>
  )
}

export default TicketItem
