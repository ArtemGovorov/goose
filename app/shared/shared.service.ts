import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
/**
 * service to handle theme changing in the header
 */
export class SharedService {
    dataChange: Observable<any>;
    public subject = new Subject<any>();
    private themeName = 'default';

    setData(data: any) {
        this.themeName = data;
        this.subject.next(data);
    }

    changeTheme(name: string) {
        this.setData(name);
    }

    themeItem() {
        return this.themeName;
    }
}
