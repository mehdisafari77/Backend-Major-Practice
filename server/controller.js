const taskList = [];
let globalId = 1;

module.exports = {
    getCompliment: (req, res) => {
      const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
      ];
  
      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];
  
      res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      const fortunes = [
        "A small donation is call for. It’s the right thing to do.",
        "A smooth long journey! Great expectations.",
        "A soft voice may be awfully persuasive.",
        "A truly rich life contains love and art in abundance.",
        "Accept something that you cannot change, and you will feel better.",
        "Adventure can be real happiness."
      ];
  
      // choose random fortune
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];
  
      res.status(200).send(randomFortune);
    },

    displayText: (req, res) => {
      const { text } = req.body;
  
      const newTask = {
        text,
        id: globalId
      }
  
      taskList.push(newTask);
      
      res.status(200).send(taskList)
    },
  
    deleteTask: (req, res) => {
      const {id} = req.params;
  
      const index = taskList.findIndex(e => e.id === +id)
  
      taskList.splice(index, 1)
      
      res.status(200).send(taskList)
    }
  }

