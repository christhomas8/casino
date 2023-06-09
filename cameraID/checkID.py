import cv2
import sys

print("Init")

cascPath = sys.argv[1]
faceCascade = cv2.CascadeClassifier(cascPath)

print("Cascade")

video_capture = cv2.Video_capture(0)

print("Video Capture")

while True:
    #capture frame-by-frame
    ret, frame = video_capture.read()

    gray = cv2.cvtColor(frame, cv2.COLOR_BGT2GRAY)

    faces = faceCascade.detectMultiScale(
        gray,
        scaleFactor = 1.1,
        minNeighbors = 5,
        minSize = (30, 30),
        flags = cv2.cv.CV_HAAR_SCALE_IMAGE
    )

    #Draw a rectangle around the faces
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x,y), (x+w, y+h), (0, 255, 0), 2)

    #display the resulting frame
    cv2.imshow('Video', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    
    #when everything is done, release the capture
    video_capture.release()
    cv2.destroyAllWindows()