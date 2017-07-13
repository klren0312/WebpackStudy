import Library from './library';
import './styles.css'

if (module.hot) {
    module.hot.accept('./library', function() {
        console.log('Accepting the updated library module!');
        Library.log();
    })
}