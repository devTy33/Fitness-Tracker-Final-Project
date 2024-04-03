import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import './CalendarComponent.css';
import './CalendarOverride.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import UserProfile from './usersession';

Modal.setAppElement('#root');

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mode, setMode] = useState(null);

  const fetchEventsFromServer = async () => {
    try {
      const username = UserProfile.getName();
      const response = await fetch(`/CalendarComponent?user=${username}`);

      if (response.ok) {
        const data = await response.json();
        const eventsData = data.map((event) => ({
          start: new Date(event.start),
          end: new Date(event.end),
          title: event.title,
          user: event.user,
        }));

        setEvents(eventsData);
      } else {
        console.error('Failed to fetch events from the server');
      }
    } catch (error) {
      console.error('Error while fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEventsFromServer();
  }, []);

  const openModal = (slotInfo, existingEvent) => {
    setIsModalOpen(true);
    setNewEvent({
      start: slotInfo.start,
      end: slotInfo.end,
      title: existingEvent ? existingEvent.title : '',
    });
    setMode(existingEvent ? 'edit' : 'add');
  };

  useEffect(() => {
    // Remove the console.log statement
  }, [isModalOpen, mode]);

  const closeModal = () => {
    setIsModalOpen(false);
    setNewEvent({});
    setSelectedEvent(null);
    setMode(null);
  };

  const saveEventToServer = (event) => {
    return fetch('/CalendarComponent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  };

  const handleEventSave = (whattype) => {
    //alert(whattype)
    if(whattype == 'Update'){ //delete so that it can be updated 
      try {
        const response = fetch(`/CalendarComponent/${selectedEvent.title}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          // Event deleted successfully
          setEvents(events.filter((event) => event.id !== selectedEvent.id));
          closeModal();
        } else {
          // Handle error response
          const errorMessage = response.text();
          console.error(`Error deleting event: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
    if (newEvent.start && newEvent.end && newEvent.title) {
      const eventWithId = { ...newEvent, user: UserProfile.getName(), id: uuidv4() };

      saveEventToServer(eventWithId)
        .then((response) => {
          if (response.ok) {
            setEvents([...events, eventWithId]);

            // Log the event id to the console
            console.log('Added event with id:', eventWithId.id);
          } else {
            console.error('Failed to save event to the server');
          }
        })
        .catch((error) => {
          console.error('Error while saving event:', error);
        });
    }

    setIsModalOpen(false);
    setNewEvent({});
    window.location.reload();
  };

  const handleEventDelete = () => {
    if (selectedEvent) {

      //setEvents(events.filter((event) => event.id !== selectedEvent.id));
      try {
        const response = fetch(`/CalendarComponent/${selectedEvent.title}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          // Event deleted successfully
          setEvents(events.filter((event) => event.id !== selectedEvent.id));
          closeModal();
        } else {
          // Handle error response
          const errorMessage = response.text();
          console.error(`Error deleting event: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
    
    closeModal();
    window.location.reload();
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    openModal({ start: event.start, end: event.end }, event);

    // Log the selected event's id to the console
    console.log('Selected event with id:', event.id);
  };

  return (
    <div className={`CalendarComponent ${mode === 'add' || mode === 'edit' ? 'adding-editing-mode' : ''}`}>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="day"
        views={['day', 'week']}
        step={60}
        showMultiDayTimes
        onSelectSlot={openModal}
        onSelectEvent={handleEventSelect}
        components={{
          timeIndicator: (props) =>
            !isModalOpen && <div {...props} className="rbc-current-time-indicator" />,
        }}
      />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Event"
        ariaHideApp={false}
      >
        {selectedEvent ? <h2>Edit Workout</h2> : <h2>Add Workout</h2>}
        <input
          type="text"
          value={newEvent.title === undefined ? '' : newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value === '' ? undefined : e.target.value })}
        />
        <button onClick={() => handleEventSave(selectedEvent ? 'Update' : 'Save')}>
          {selectedEvent ? 'Update' : 'Save'}
        </button>
        {selectedEvent &&
          <button onClick={handleEventDelete}>Delete</button>
        }
      </Modal>
    </div>
  );
};

export default CalendarComponent;
