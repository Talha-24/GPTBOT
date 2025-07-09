 const currentUSerId = "string";
  const selectedUserId = "2304823";

  const [messages, setMessages] = useState<any>();
  const [currentMessage, setCurrentMessage] = useState("");



  useEffect(() => {

    // REQUESTING FOR NEW MESSAGES of the CURRENTUSER...
    Socket.on("loadNewChat", (data) => {
      setMessages(data);
    })

    // REQUEST FOR PREVIOUS MESSAGE OF THE USER


    Socket.emit('existingChat', {
      sender_id: "ladjflkaksjdffdsa",
      receiver_id: "laksdjflaksjfdas",
    })



    // OVERALL CHAT ( Including the previous chat with user + new message of the user)
    Socket.on("loadChat", ({ chat }) => {
      setMessages((chat));
    })


    return ()=> {
      // IT RUNS WHEN COMPONENT IS UNMOUNTED OF THE DOM (removed from the dom)
      Socket.close("loadChat");
      Socket.close("existingChat");
      Socket.close("loadnewChat");
    }
  }, [currentUSerId, selectedUserId])


  const sendMessage=()=>{

    const msg={
      sender_id: "lasjdflakdsfa",
      receiverId: 'alsdfjalkfd',
      message_type: "text",
      message: currentMessage,
    }
    // setMessages((prev)=>[...prev,msg]);
    // setCurrentMessage("");
  }

