import { format } from "date-fns";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Avatar from "@/components/atoms/Avatar";
import ApperIcon from "@/components/ApperIcon";

const BookingCard = ({ booking, influencer, customer, onStatusChange, currentUser }) => {
  const getStatusVariant = (status) => {
    const variants = {
      pending: "warning",
      active: "info",
      in_review: "secondary",
      completed: "success",
      cancelled: "danger"
    };
    return variants[status] || "secondary";
  };

  const getStatusText = (status) => {
    const texts = {
      pending: "Pending Approval",
      active: "In Progress",
      in_review: "Under Review",
      completed: "Completed",
      cancelled: "Cancelled"
    };
    return texts[status] || status;
  };

  const canUpdateStatus = () => {
    if (currentUser?.role === "influencer") {
      return booking.status === "pending" || booking.status === "active";
    }
    if (currentUser?.role === "customer") {
      return booking.status === "in_review";
    }
    return false;
  };

  const getNextStatus = () => {
    if (currentUser?.role === "influencer") {
      if (booking.status === "pending") return "active";
      if (booking.status === "active") return "in_review";
    }
    if (currentUser?.role === "customer" && booking.status === "in_review") {
      return "completed";
    }
    return null;
  };

  const otherUser = currentUser?.role === "influencer" ? customer : influencer;

  return (
    <div className="bg-white rounded-xl shadow-premium p-6 hover:shadow-hover transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar
            src={otherUser?.profileImage}
            alt={otherUser?.displayName || otherUser?.name}
            size="md"
            fallbackText={otherUser?.displayName || otherUser?.name}
          />
          <div>
            <h3 className="font-semibold text-gray-900">
              {otherUser?.displayName || otherUser?.name || "User"}
            </h3>
            <p className="text-sm text-gray-600">
              Booking #{booking.Id}
            </p>
          </div>
        </div>
        <Badge variant={getStatusVariant(booking.status)}>
          {getStatusText(booking.status)}
        </Badge>
      </div>

      {/* Project Details */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm line-clamp-3">
          {booking.projectDetails}
        </p>
      </div>

      {/* Deliverables */}
      {booking.deliverables && booking.deliverables.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Deliverables:</h4>
          <div className="flex flex-wrap gap-1">
            {booking.deliverables.map((deliverable, index) => (
              <Badge key={index} variant="secondary" size="sm">
                {deliverable}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Timeline & Budget */}
      <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
        <div>
          <div className="text-sm text-gray-600">Timeline</div>
          <div className="font-medium">
            {format(new Date(booking.startDate), "MMM d")} - {format(new Date(booking.endDate), "MMM d")}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Budget</div>
          <div className="font-bold text-primary-800">
            ${booking.budget.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Messages Indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <ApperIcon name="MessageCircle" className="h-4 w-4 mr-1" />
          {booking.messages || 0} messages
        </div>
        <div className="text-xs text-gray-500">
          Created {format(new Date(booking.createdAt), "MMM d, yyyy")}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <ApperIcon name="MessageCircle" className="h-4 w-4 mr-2" />
          Message
        </Button>
        {canUpdateStatus() && getNextStatus() && (
          <Button
            size="sm"
            onClick={() => onStatusChange(booking.Id, getNextStatus())}
            className="flex-1"
          >
            {getNextStatus() === "active" && "Accept"}
            {getNextStatus() === "in_review" && "Submit"}
            {getNextStatus() === "completed" && "Approve"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default BookingCard;