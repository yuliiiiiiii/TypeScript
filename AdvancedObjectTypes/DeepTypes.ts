interface Robot {
  about: {
    general: {
      id: number,
      name: string
    }
  },

  getRobotId: () => void
}

class OneSeries implements Robot {
  about;

  constructor(props: {general: {id: number, name: string}}) {
    this.about = props
  };

  getRobotId() {
    return `ID: ${this.about.general.id}`
  }
}

const newBot = new OneSeries({general: { id: 3, name: 'Otto'}})
console.log(newBot.getRobotId());