UI.common.timeEvents = React.createClass({
	render() {

		var events = this.props.events.map(event => {
			return <UI.common.eventList event={event} key={event.time}/>;
		});

		return (
			<div className="event-list__time">
				<h4 className="event-list__time__title">{this.props.time}</h4>
				{events}
			</div>
		);
	}
});