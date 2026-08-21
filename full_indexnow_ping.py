import urllib.request
import json
import time

# Ваш унікальний ключ IndexNow
KEY = "268d242c1b2c4c3b9b4c4c3b9b4c4c3b"
HOST = "www.gigwisetax.com"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

# Список основних розділів
platforms = ['doordash', 'uber', 'etsy', 'onlyfans', 'instacart', 'airbnb', 'amazon-flex', 'lyft', 'grubhub', 'walmart-spark']
states = ['alabama','alaska','arizona','arkansas','california','colorado','connecticut','delaware','florida','georgia','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new-hampshire','new-jersey','new-mexico','new-york','north-carolina','north-dakota','ohio','oklahoma','oregon','pennsylvania','rhode-island','south-carolina','south-dakota','tennessee','texas','utah','vermont','virginia','washington','west-virginia','wisconsin','wyoming','washington-dc']

url_list = [f"https://{HOST}/", f"https://{HOST}/ai-freelancer", f"https://{HOST}/calculators"]
for p in platforms:
    url_list.append(f"https://{HOST}/{p}" )
    for s in states:
        url_list.append(f"https://{HOST}/{p}/{s}" )

print(f"Total URLs to ping: {len(url_list)}")

data = {
    "host": HOST,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": url_list
}

req_data = json.dumps(data).encode('utf-8')
# Додаємо User-Agent, щоб сервер не блокував запит
headers = {
    "Content-Type": "application/json; charset=utf-8",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

req = urllib.request.Request("https://api.indexnow.org/indexnow", data=req_data, headers=headers )

try:
    with urllib.request.urlopen(req) as response:
        res_code = response.getcode()
        if res_code in [200, 202]:
            print("✅ SUCCESS! IndexNow accepted the URLs.")
        else:
            print(f"⚠️ IndexNow returned code: {res_code}")
except Exception as e:
    print(f"❌ Connection failed: {e}")
    print("\n💡 Порада: Якщо помилка 403 повторюється, спробуйте просто відкрити в браузері:")
    print(f"https://www.gigwisetax.com/api/indexnow" )
