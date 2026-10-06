#!/usr/bin/env bash
# Setzt Git-Name und -E-Mail, damit der erste Commit nicht mit
# „Author identity unknown – Please tell me who you are“ scheitert.
# Greift nur, wenn nichts gesetzt ist oder noch der GitHub-Standard (GitHub / noreply@github.com) steht.
# E-Mail ist die noreply-Adresse des GitHub-Kontos: Commits zählen fürs Profil,
# und GitHub blockiert den Push nicht (GH007, private E-Mail).

name=$(git config --get user.name)
email=$(git config --get user.email)
if [ -n "$name" ] && [ "$name" != "GitHub" ] && [ -n "$email" ] && [ "$email" != "noreply@github.com" ]; then
  exit 0
fi

login="${GITHUB_USER:-}"
if [ -z "$login" ]; then
  echo "git-identitaet: GITHUB_USER fehlt (kein Codespace?) – Git-Name und -E-Mail bitte selbst setzen."
  exit 0
fi

# Öffentliche Profildaten: Kontonummer für die noreply-Adresse, Anzeigename falls vorhanden.
profil=$(curl -fsS --max-time 10 "https://api.github.com/users/$login" 2>/dev/null)
id=$(printf '%s' "$profil" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(String(JSON.parse(s).id??""))}catch{}})')
anzeige=$(printf '%s' "$profil" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(JSON.parse(s).name??"")}catch{}})')

if [ -n "$id" ]; then
  neue_email="$id+$login@users.noreply.github.com"
else
  neue_email="$login@users.noreply.github.com"
fi

git config --global user.name "${anzeige:-$login}"
git config --global user.email "$neue_email"
echo "git-identitaet: Git-Name „${anzeige:-$login}“, E-Mail $neue_email"
