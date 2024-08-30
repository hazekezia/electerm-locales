/**
 * language: german
 */
const lang = {

  // app desc
  app: {
    isRunning: 'läuft',
    press: 'drücken',
    toShow: 'zeigen',
    changeLog: 'Änderungsprotokoll',
    knownIssues: 'Bekannte Probleme',
    sponsorElecterm: 'Förderer von electerm',
    privacyNotice: 'Datenschutzerklärung',
    desc: 'Terminal/ssh/sftp/telnet/Seriellport-/RDP-/VNC-Client (Linux, Mac, Win)'
  },

  // app menu
  menu: {
    // mac app
    hide: 'Verstecken',
    hideothers: 'Andere verstecken',
    unhide: 'Anzeigen',
    quit: 'Beenden',

    // edit
    edit: 'Bearbeiten',
    undo: 'Rückgängig',
    redo: 'Wiederholen',
    cut: 'Ausschneiden',
    copy: 'Kopieren',
    paste: 'Einfügen',
    pasteandmatchstyle: 'Einfügen und Stil anpassen',
    del: 'Löschen',
    selectall: 'Alles auswählen',
    startspeaking: 'Stimme aktivieren',
    stopspeaking: 'Stimme deaktivieren',

    // view
    view: 'Ansicht',
    reload: 'Neu laden',
    forcereload: 'Erneut laden',
    toggledevtools: 'Entwicklerwerkzeuge',
    toggleControl: 'Steuerung anzeigen',
    resetzoom: 'Zoom zurücksetzen',
    zoomin: 'Vergrößern',
    zoomout: 'Verkleinern',
    togglefullscreen: 'Vollbild',

    // window
    window: 'Fenster',
    minimize: 'Minimieren',
    maximize: 'Maximieren',
    unmaximize: 'Maximieren aufheben',
    close: 'Schließen',
    restart: 'Neu starten',
    front: 'Vorne',

    // help
    help: 'Hilfe',
    about: 'Über',
    checkUpdate: 'Aktualisierung prüfen',
    reportIssue: 'Fehler melden',
    homepage: 'Homepage',
    sencondInstanceTip: 'Dies ist nur im Haupt-Fenster möglich',
    copyFilePath: 'Dateipfad kopieren'
  },

  // common
  common: {
    history: 'Verlauf',
    bookmarks: 'Lesezeichen',
    bookmarkCategory: 'Kategorie',
    setting: 'Einstellung',
    about: 'Über',
    ok: 'OK',
    cancel: 'Abbrechen',
    expandAll: 'Alle aufklappen',
    collapseAll: 'Alle zuklappen',
    restoreSessions: 'Sitzungen wiederherstellen',
    ignore: 'Ignorieren',
    pin: 'Anheften',
    keyboardShortcuts: 'Tastatürkürzel',
    delSelected: 'ausgewählte löschen',
    turnOff: 'abschalten',
    tasks: 'Aufgaben',
    batchOperation: 'Batch -Betrieb',
    examples: 'Beispiele',
    importFromCSV: 'aus der CSV -Datei importieren',
    addToQueue: 'zur Warteschlange hinzufügen',
    execute: 'ausführen',
    finished: 'fertig',
    resolutions: 'Auflösung',
    addressBookmarks: 'Adress-Lesezeichen'
  },

  // control buttons
  control: {
    author: 'Autor',
    download: 'Herunterladen',
    bugReport: 'Fehler melden',
    checkForUpdate: 'Aktualisierung prüfen',
    homepage: 'Homepage',
    notFoundContent: 'Inhalt nicht gefunden',
    newSsh: 'Neue SSH-Verbindung',
    newTerminal: 'Neuer Terminal',
    dependencies: 'Abhängigkeiten',
    env: 'Umgebungsvariablen',
    os: 'Betriebssystem',
    userTips: 'Benutzungshinweise',
    commandLineUsage: 'Kommandozeilen-Benutzung',
    newBookmark: 'Neues Lesezeichen',
    newWindow: 'Neues Fenster'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'Transfer-Verlauf',
    localPath: 'Lokaler Pfad',
    remotePath: 'Remote Pfad',
    type: 'Typ',
    startTime: 'Startzeit',
    finishTime: 'Endzeit',
    speed: 'Geschwindigkeit',
    clear: 'Leeren',
    fromPath: 'Von',
    toPath: 'Nach'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'Titel darf nicht leer sein',
    close: 'Schließen',
    closeOtherTabs: 'Andere Tabs schließen',
    closeTabRight: 'Rechte Tabs schließen',
    newTab: 'Neuer Tab',
    duplicate: 'Duplizieren',
    rename: 'Umbenennen',
    openNewTerm: 'Neuen Terminal öffnen',
    sessions: 'Sitzungen'
  },

  // main warpper
  main: {
    error: 'Etwas ist fehlgeschlagen.'
  },

  // updater check
  updater: {
    noNeed: 'Keine Aktualisierung',
    noNeedDesc: 'Sie haben die neueste Version',
    fail: 'Aktualisierung fehlgeschlagen',
    newVersion: 'Neue Version',
    upgrade: 'Aktualisieren',
    upgrading: 'Aktualisieren...',
    skipThisVersion: 'Diese Version überspringen',
    moreChangeLog: 'Weitere Änderungsprotokoll',
    manuallyDownloadFrom: 'manuell herunterladen von'
  },

  // setting
  setting: {
    new: 'Neu',
    settings: 'Einstellungen',
    common: 'Allgemein',
    hotkeyNotOk: 'Hotkey ist nicht verfügbar',
    saved: 'Gespeichert',
    saveLang: 'Gespeichert, bitte neustarten',
    restartNow: 'Jetzt neu starten',
    hotkeyDesc: 'System Hotkey(Bringe das Fenster zurück)',
    timeoutDesc: 'SSH/SFTP Timeout(in Millisekunden)',
    scrollBackDesc: 'Scrollback-Größe(in Zeilen)',
    language: 'Sprache',
    copyWhenSelect: 'Kopieren wenn ausgewählt',
    rightClickSelectsWord: 'Rechtsklick wählt Wort aus',
    pasteWhenContextMenu: 'Rechtsklick um einzufügen',
    fontSize: 'Schriftgröße',
    fontFamily: 'Schriftfamilie',
    opacity: 'Transparenz',
    global: 'Global',
    disableSshHistory: 'SSH-Verlauf deaktivieren',
    disableTransferHistory: 'Transfer-Verlauf deaktivieren',
    resetAllToDefault: 'Alle zurücksetzen',
    terminalBackgroundImage: 'Terminal-Hintergrundbild',
    chooseFile: 'Datei auswählen',
    rendererType: 'Renderer-Typ',
    defaultTerminalType: 'Standard-Terminal-Typ',
    ctrlOrMetaOpenTerminalLink: 'STRG oder META (auf Mac) muss gedrückt werden, wenn Sie auf einen Terminal-Link klicken',
    noTerminalBg: 'Kein Hintergrund-Bild',
    saveTerminalLogToFile: 'Terminal-Log in Datei speichern',
    checkUpdateOnStart: 'Beim Start auf Aktualisierung prüfen',
    encrypt: 'Verschlüsseln',
    cursorBlink: 'Blinkender Cursor',
    openAll: 'Alle Lesezeichen in dieser Kategorie öffnen',
    useSystemTitleBar: 'System-Titelleiste verwenden',
    useSystemTitleBarTip: 'Programm muss neu gestartet werden, wenn Sie System-Titelleiste verwenden, Transparenz funktioniert nicht',
    onStartBookmarks: 'Öffne Lesezeichen beim Start',
    pleaseSelect: 'Bitte wählen',
    keepaliveIntervalDesc: 'Keepalive-Intervall(in Millisekunden)',
    editorTip: 'Editor Befehl oder Pfad',
    cursorStyle: 'Cursor-Stil',
    confirmBeforeExit: 'Vor dem Beenden bestätigen',
    initDefaultTabOnStart: 'Öffnen Sie die Standard -Registerkarte, wenn die App starten',
    screenReaderMode: 'Unterstützen Sie den Bildschirmleser im Terminal',
    makeItPortable: 'Machen Sie es tragbar',
    dataTransferedTo: 'Daten übertragen auf',
    autoRefreshWhenSwitchToSftp: 'automatische Aktualisieren beim Wechsel zu SFTP',
    terminalWordSeparator: 'Terminalwortabscheider',
    settingShortcuts: 'Verknüpfungen',
    closeCurrentTab: 'Die aktuelle Registerkarte schließen',
    prevTab: 'Vorheriger Tab',
    nextTab: 'Nächster Tab',
    pasteSelected: 'Ausgewähltes einfügen',
    showNormalBuffer: 'Normale Puffer zeigen',
    customCss: 'Benutzerdefinierte CSS',
    hideSshConfig: 'SSH-Config-Kategorie ausblenden',
    addTimeStampToTermLog: 'Fügen Sie dem Terminalprotokoll Zeitstempel hinzu',
    terminalBackSpaceMode: 'Endraumsequenz',
    showHiddenFilesOnSftpStart: 'Zeigen Sie versteckte Dateien auf SFTP -Start an',
    hideIP: 'IP-Adresse verbergen'
  },

  // sftp
  sftp: {
    cancel: 'Abbrechen',
    skip: 'Überspringen',
    merge: 'Zusammenführen',
    overwrite: 'Überschreiben',
    rename: 'Umbenennen',
    renameAll: 'Alle umbenennen',
    mergeDesc: 'Konflikt-Ordner zusammenführen',
    overwriteDesc: 'Konflikt-Dateien überschreiben',
    mergeAll: 'Alle zusammenführen',
    overwriteAll: 'Alle überschreiben',
    renameDesc: 'Konflikt-Dateien/Ordner umbenennen',
    folder: 'Ordner',
    file: 'Datei',
    fileConflict: 'Datei-Konflikt',
    submit: 'Absenden',
    edit: 'Bearbeiten',
    open: 'Öffnen',
    permission: 'Berechtigung',
    name: 'Name',
    mode: 'Modus',
    path: 'Pfad',
    fullPath: 'Voller Pfad',
    size: 'Größe',
    accessTime: 'Zugriffszeit',
    modifyTime: 'Änderungszeit',
    attributes: 'Attribute',
    enter: 'Eingeben',
    deleteAll: 'Alle löschen',
    selected: 'Ausgewählt',
    newFile: 'Neue Datei',
    newFolder: 'Neuer Ordner',
    selectAll: 'Alle auswählen',
    refresh: 'Aktualisieren',
    editPermission: 'Berechtigung bearbeiten',
    info: 'Info',
    filesAndFolders: 'Dateien und Ordner',
    files: 'Dateien',
    delTip: 'Sind Sie sicher? Diese werden gelöscht',
    delTip1: 'und alle Dateien und Ordner in ihnen',
    goParent: 'Zu übergeordnetem Ordner',
    hide: 'Verstecken',
    show: 'Anzeigen',
    hfd: 'Versteckte Dateien und Ordner anzeigen',
    remote: 'Remote',
    local: 'Lokal',
    fileTransfers: 'Datei-Transfer',
    cancelAll: 'Alle abbrechen',
    upload: 'Hochladen',
    download: 'Herunterladen',
    resume: 'Fortsetzen',
    pause: 'Pause',
    reset: 'Zurücksetzen',
    showInDefaultFileMananger: 'In Dateimanager anzeigen',
    compressAndDownload: 'Komprimieren und herunterladen',
    compressAndUpload: 'Komprimieren und hochladen',
    editWithSystemEditor: 'Bearbeiten mit Systemeditor',
    gotoFolderInTerminal: 'Greifen Sie von der Konsole auf diesen Ordner zu',
    calculate: 'Berechnung',
    skipAll: 'alles überspringen'
  },

  permission: {
    read: 'Lesen',
    write: 'Schreiben',
    exec: 'Ausführen',
    owner: 'Besitzer',
    group: 'Gruppe',
    other: 'Andere'
  },

  // ssh form
  form: {
    password: 'Passwort',
    privateKey: 'Privater Schlüssel',
    privateKeyDesc: 'Privater Schlüssel String',
    importFromFile: 'Importieren aus Datei',
    passphrase: 'Passphrase',
    passphraseDesc: 'Passphrase für privaten Schlüssel',
    host: 'Host',
    username: 'Benutzername',
    port: 'Port',
    title: 'Titel',
    saveAndConnect: 'Speichern und verbinden',
    saveAndCreateNew: 'Speichern und neu erstellen',
    save: 'Speichern',
    loginScript: 'Login-Skript',
    loginScriptDelay: 'Login-Skript-Verzögerung',
    loginScriptTip: 'Login-Skript wird ausgeführt, nachdem der SSH-Client verbunden ist',
    connect: 'Verbinden',
    testConnection: 'Verbindung testen',
    required: 'Benötigt',
    proxyIp: 'Proxy-IP',
    proxyPort: 'Proxy-Port',
    proxyType: 'Proxy-Typ',
    proxyIpPlaceholder: 'Proxy-IP-Adresse',
    selectProxy: 'Proxy auswählen',
    auth: 'Authentifizierung',
    proxy: 'Proxy',
    use: 'Verwenden',
    encode: 'Encodieren',
    terminalType: 'Terminal-Typ',
    startDirectory: 'Start-Verzeichnis',
    ignoreKeyboardInteractive: 'Ignoriere interaktives Keyboard',
    description: 'Beschreibung',
    connectionHopping: 'Connection hopping',
    loginPassword: 'Passwort',
    loginFail: 'Fehler bei der Anmeldung',
    notSet: 'nicht eingestellt',
    displayRaw: 'Rohtext im Terminal anzeigen',
    supportRegexp: 'Unterstützt reguläre Ausdrücke',
    keywordsHighlight: 'Stichwort-Hervorhebung',
    keyword: 'Stichwort',
    viewOnly: 'Nur anzeigen',
    scaleViewport: 'Ansichtsfenster skalieren',
    credentialsRequired: 'Anmeldeinformationen erforderlich',
    profiles: 'Profile',
    profileName: 'Profilname',
    interactiveValues: 'vordefinierte interaktive Werte für die Tastatur',
    chooseFromBookmarks: 'Aus Lesezeichen auswählen'
  },

  // ssh terminal
  ssh: {
    clear: 'Leeren',
    selectAll: 'Alle auswählen',
    savePassword: 'Passwort speichern',
    search: 'Suchen',
    terminal: 'Terminal',
    nextMatch: 'Nächste Übereinstimmung',
    prevMatch: 'Vorherige Übereinstimmung',
    split: 'Teilen',
    fileManager: 'Dateimanager',
    changeDirection: 'Richtung ändern',
    batchInput: 'Stapel-Eingabe',
    runInAllTerminals: 'In allen Terminals ausführen',
    matchCase: 'Groß-/Kleinschreibung beachten',
    matchWholeWord: 'Ganzes Wort',
    useRegExp: 'Reguläre Ausdrücke verwenden',
    socketCloseTip: 'Terminalverbindung verloren',
    sshTunnel: 'SSH -Tunnel',
    remotePort: 'Remote -Port',
    localPort: 'Lokaler Hafen',
    localToRemote: 'Leiten Sie die lokale Verbindung auf Remote -Server weiter',
    remoteToLocal: 'Remote -Verbindung zum lokalen Server weiterleiten',
    sftpPathFollowSsh: 'SFTP -Pfadsynchronisierung mit Terminal',
    dynamicPortForwarding: 'Dynamische Portweiterleitung'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'Terminal-Design',
    export: 'Exportieren',
    themeName: 'Design-Name',
    saveAndApply: 'Speichern und anwenden',
    apply: 'Anwenden',
    default: 'Standard',
    newTheme: 'Neues Design',
    themeConfig: 'Design-Konfiguration',
    updated: 'Design aktualisiert',
    uiThemes: 'UI-Design'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'Schnell-Befehl',
    quickCommands: 'Schnell-Befehle',
    quickCommandName: 'Schnell-Befehl-Name',
    addQuickCommands: 'Schnell-Befehle hinzufügen',
    newQuickCommand: 'Neuer Schnell-Befehl',
    inputOnly: 'Nur Eingabe',
    labels: 'Beschriftungen',
    sortByFrequency: 'Sortieren nach Frequenz'
  },

  // setting sync
  settingSync: {
    settingSync: 'Einstellungs-Synchronisierung',
    sync: 'Synchronisieren',
    syncing: 'Synchronisiere...',
    syncSettings: 'Einstellungen synchronisieren',
    uploadSettings: 'Hochlade-Einstellungen',
    downloadSettings: 'Herunterlade-Einstellungen',
    synced: 'Synchronisiert',
    syncDesc: 'Synchronisiere Lesezeichen / Verlauf / Einstellung für GitHub secret gist',
    autoSync: 'Automatische Synchronisierung',
    lastSyncTime: 'Letzte Synchronisierungszeit',
    useExistingGistId: 'Verwende existierende Gist-ID',
    autoSyncTip: 'Überschreibe (Überschreibe) Daten, wenn sich die Daten geändert haben'
  }
}

export default {
  lang,
  name: 'German',
  match: 'de',
  flag: '🇩🇪'
}
