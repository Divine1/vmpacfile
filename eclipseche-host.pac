function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*nip.io")) {
    return "PROXY 10.186.84.65";
  }
  return "DIRECT";
}
