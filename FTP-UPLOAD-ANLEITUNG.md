# 🚀 FTP Upload Anleitung für churros-schupfnudeln.de

## 📦 Build erstellen

**Wichtig:** Vor jedem Upload immer einen neuen Build erstellen!

```bash
npm run build
```

Dies erstellt den `dist` Ordner mit allen optimierten Dateien.

---

## 📁 Dateien für FTP-Upload

**Alle Dateien aus dem `dist` Ordner hochladen:**

```
dist/
├── index.html
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   ├── favicon-[hash].svg
│   └── [alle Bilder].png/.jpg
```

**WICHTIG:** 
- ✅ Lade den **gesamten Inhalt** des `dist` Ordners hoch (nicht den Ordner selbst!)
- ✅ Die Dateien müssen direkt im **Root-Verzeichnis** (/) deiner Domain liegen
- ✅ Der `assets` Ordner muss mit hochgeladen werden

---

## 🔧 FTP-Upload mit FileZilla (empfohlen)

### 1. FileZilla installieren
Download: https://filezilla-project.org/

### 2. FTP-Zugangsdaten eingeben

**Bei ALL-INKL oder anderem Hoster:**
- **Host:** ftp.churros-schupfnudeln.de (oder IP-Adresse)
- **Benutzername:** Dein FTP-Benutzer
- **Passwort:** Dein FTP-Passwort
- **Port:** 21 (Standard FTP) oder 22 (SFTP)

### 3. Verbinden und Upload

1. **Verbindung herstellen** → "Verbinden" klicken
2. **Auf dem Server:** Navigiere zum Root-Verzeichnis (oft `/` oder `/html` oder `/public_html`)
3. **Lokal:** Navigiere zum `dist` Ordner in deinem Projekt
4. **Alle Dateien markieren** im `dist` Ordner (Strg+A)
5. **Rechtsklick → Upload** (oder einfach rüberziehen)

**Warte bis alle Dateien hochgeladen sind!** ✅

---

## 🌐 Alternative: FTP mit WinSCP

### 1. WinSCP installieren
Download: https://winscp.net/

### 2. Neue Verbindung erstellen

- **Übertragungsprotokoll:** FTP oder SFTP
- **Servername:** ftp.churros-schupfnudeln.de
- **Benutzername:** Dein FTP-User
- **Passwort:** Dein FTP-Passwort

### 3. Upload durchführen

1. Verbinde dich mit dem Server
2. Öffne das Root-Verzeichnis (rechte Seite)
3. Öffne den `dist` Ordner (linke Seite)
4. Markiere alle Dateien → Upload

---

## ⚡ Schnell-Upload per Kommandozeile (PowerShell)

Falls du regelmäßig hochladen möchtest, hier ein PowerShell-Skript:

### `upload-ftp.ps1` erstellen:

```powershell
# FTP-Zugangsdaten
$ftpServer = "ftp://ftp.churros-schupfnudeln.de"
$ftpUser = "DEIN_BENUTZERNAME"
$ftpPass = "DEIN_PASSWORT"

# Build erstellen
Write-Host "Erstelle Build..." -ForegroundColor Green
npm run build

# Upload-Funktion
function Upload-File {
    param($LocalFile, $RemotePath)
    
    $webclient = New-Object System.Net.WebClient
    $webclient.Credentials = New-Object System.Net.NetworkCredential($ftpUser, $ftpPass)
    
    try {
        $uri = New-Object System.Uri("$ftpServer/$RemotePath")
        $webclient.UploadFile($uri, $LocalFile)
        Write-Host "✓ $RemotePath hochgeladen" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Fehler bei $RemotePath" -ForegroundColor Red
    }
}

# Alle Dateien aus dist hochladen
Write-Host "`nLade Dateien hoch..." -ForegroundColor Green
Get-ChildItem -Path "dist" -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Replace((Get-Location).Path + "\dist\", "").Replace("\", "/")
    Upload-File -LocalFile $_.FullName -RemotePath $relativePath
}

Write-Host "`n✓ Upload abgeschlossen!" -ForegroundColor Green
```

**Verwendung:**
```powershell
.\upload-ftp.ps1
```

---

## 📋 Checkliste vor dem Upload

- [ ] `npm run build` ausgeführt
- [ ] `dist` Ordner wurde erstellt
- [ ] FTP-Zugangsdaten bereit
- [ ] **Alte Dateien auf dem Server löschen** (besonders alte `index-[hash].js` und `.css` Dateien)
- [ ] Alle Dateien aus `dist` hochladen
- [ ] Website aufrufen und testen: https://churros-schupfnudeln.de

---

## 🔍 Nach dem Upload testen

1. **Website öffnen:** https://churros-schupfnudeln.de
2. **Hard Refresh:** Strg + F5 (um Cache zu löschen)
3. **Prüfen:**
   - ✅ Header zeigt "Churros & Schupfnudeln"
   - ✅ "📍 Markt 11" ist klickbar auf Mobile
   - ✅ Schupfnudeln Section vorhanden
   - ✅ SEO Meta Tags (F12 → Elements → `<head>`)
   - ✅ Keine 404-Fehler in der Konsole (F12)

---

## 🆘 Troubleshooting

### Problem: Website zeigt alte Version

**Lösung:** 
- Browser-Cache leeren (Strg + Shift + Delete)
- Hard Refresh (Strg + F5)
- In Incognito-Fenster öffnen

### Problem: 404 Fehler

**Lösung:**
- Prüfe ob `index.html` im Root liegt (nicht in Unterordner!)
- Prüfe ob `assets` Ordner hochgeladen wurde

### Problem: CSS/JS funktioniert nicht

**Lösung:**
- Prüfe ob alle Dateien im `assets` Ordner hochgeladen wurden
- Server-Pfade prüfen (sollten relativ sein: `/assets/...`)

### Problem: Bilder werden nicht angezeigt

**Lösung:**
- Prüfe ob alle `.png` und `.jpg` Dateien hochgeladen wurden
- Dateiberechtigungen: 644 für Dateien, 755 für Ordner

---

## 📊 Server-Struktur nach Upload

```
/ (Root deiner Domain)
├── index.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── index-CchjCJS5.js
    ├── index--1icX42D.css
    ├── favicon-CYe3ufRy.svg
    ├── Churros1-DcLbo0y0.jpg
    ├── Schupfnudeln0-C1Tc3w75.png
    ├── ... (alle anderen Bilder)
```

---

## 🎉 Fertig!

Deine Website ist jetzt live unter: **https://churros-schupfnudeln.de**

Bei Fragen oder Problemen, kontaktiere deinen Hosting-Support! 🚀
