import cv2
import webbrowser
#import antigravity

cap = cv2.VideoCapture(0)
# initialize the cv2 QRCode detector
detector = cv2.QRCodeDetector()

player = ""

while True:
    _, img = cap.read()
    data, bbox, _ = detector.detectAndDecode(img)

    print(data)
    
    if data:
        a = data
        if (a != player):
            player = a
            print("Player: " + player)
            print("A: " + a)
    
    cv2.imshow("QRCODEscanner", img)
    if cv2.waitKey(1) == ord("q"):        
        #break
        continue

    #b = webbrowser.open(str(a))
    #cap.release()
    #cv2.destroyAllWindows
    
    