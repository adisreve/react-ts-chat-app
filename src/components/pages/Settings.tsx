import React, { useState, useEffect } from 'react'

import styles from './Settings.module.scss';

import { getSettings, setSettings, resetSettings } from '../../store/action/settingsActions';
import { Settings as Setting } from '../../store/types';
import { AppState } from '../../store/reducers';
import { connect } from 'react-redux';

interface SettingsProps {
    settings: Setting,
    getSettings: typeof getSettings,
    setSettings: typeof setSettings,
    resetSettings: typeof resetSettings
}

interface Props {
    clock: any
}

const Settings: React.FC<SettingsProps> = (props) => {
    const [username, setUsername] = useState(props.settings.username);
    const [clock, setClock] = useState<Props>({ clock: props.settings.clockFormat }); // get Initial from localstorage
    const [onEnter, setOnEnter] = useState(props.settings.onEnter);

    useEffect(() => {
        setUsername(props.settings.username);
        setClock({ clock: props.settings.clockFormat });
        setOnEnter(props.settings.onEnter);
    }, [props.settings])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        props.setSettings({
            username,
            clockFormat: clock.clock,
            onEnter,
            current: true,
            unread: 4
        })
    }

    const reset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();

        props.resetSettings();
    }

    return (
        <div className={`container ${styles.formOuter}`}>
            <div className={styles.formWrapper}>
                <h1>Settings</h1>
                <form onSubmit={handleSubmit} className="form" noValidate>
                    <div className={styles.formControl}>
                        <label htmlFor="username">Username
                            <input type="text" name="username" value={username} onChange={e => setUsername(e.currentTarget.value)}/>
                        </label>
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="clock">Clock Display
                            <div className={styles.checkboxWrapper}>
                                <input type="radio" name="clock" checked={clock.clock === '12h'} onChange={e => setClock({ clock: '12h' })}/><span>12h</span>
                                <input type="radio" name="clock" checked={clock.clock === '24h'} onChange={e => setClock({ clock: '24h' })}/><span>24h</span>
                            </div>
                        </label>
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="sendOnEnter">Send Messages on CTRL + Enter
                            <div className={styles.checkboxWrapper}>
                                <input type="radio" name="sendOnEnter" checked={onEnter} onChange={e => setOnEnter(true)}/><span>On</span>
                                <input type="radio" name="sendOnEnter" checked={!onEnter} onChange={e => setOnEnter(false)}/><span>Off</span>
                            </div>
                        </label>
                    </div>
                    {/* <div className={styles.formControl}>
                        <label htmlFor="username">Language
                            <input type="text" name="username" />
                        </label>
                    </div> */}
                    <button type="submit">SUBMIT</button>
                    <button type="reset" onClick={e => reset(e) }>RESET SETTINGS</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    settings: state.settings
})

export default connect(mapStateToProps, { getSettings, setSettings, resetSettings })(Settings);


