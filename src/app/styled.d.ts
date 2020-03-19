// Import original module declarations
import 'styled-components';

// extend module declarations
declare module 'styled-components' {
    export interface DefaultTheme {
        mode: string
    }
}