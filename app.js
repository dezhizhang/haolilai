
import { Token } from './util/token';


App({
    onLaunch:function() {
        const token = new Token();
        token.verify();
        
    }
})