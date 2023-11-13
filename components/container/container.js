//Components
import { Rectangle, Square } from './index'

const Container = (props) => {
    switch (props.type) {
        case 'rectangle':
            return(<Rectangle />)
        case 'square':
            return(<Square />)
    }
}

export default Container;