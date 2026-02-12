/* 
 * : HOTEL GUEST MANAGEMENT SYSTEM 
  grouw member :: 
 */

#include <iostream>
#include <fstream>
#include <string>

using namespace std;

//   Person

class Person {
protected: 
    string name;
    string phone;

public:
    // defaut Constructer
    Person() {
        this->name = "N/A";
        this->phone = "000";
    }

    // Overloadd Constructor
    Person(string name, string phone) {
        this->name = name;
        this->phone = phone;
    }

    //  destructor
    virtual ~Person() {}

    //Encapsulati: etter and Setter
    void setName(string n) { this->name = n; }
    string getName() { return this->name; }

   //function for overriiding
    virtual void display() {
        cout << "Name: " << name << " | Phone: " << phone;
    }
};


// druved class Guest 

class Guest : public Person {
private:
    string guestID;

public:
    Guest() : Person() {
        this->guestID = "0";
    }

    
    Guest(string n, string p, string id) : Person(n, p) {
        this->guestID = id;
    }

    // etter and getter
    void setID(string id) { this->guestID = id; }
    string getID() { return guestID; }

    //verriding
    void display() override {
        Person::display(); // Reusing parent's display logic
        cout << " | Guest ID: " << guestID;
    }
};


//   hotelSystem
class HotelSystem {
private:
    Guest guestList[50]; 
    int guestCount;

public:
    HotelSystem() {
        this->guestCount = 0;
    }

    void addGuest() {
        string n, p, id;
        cout << "\n newCheck-in --\n";
        cout << "Enter Name: "; cin >> n;
        cout << "Enter Phone: "; cin >> p;
        cout << "Enter ID: "; cin >> id;

       
        Guest newGuest(n, p, id);

        if (guestCount < 50) {
            guestList[guestCount] = newGuest;
            guestCount++;
        }

        ofstream outFile("database.txt", ios::app); 
        if (outFile.is_open()) {
            outFile << n << " " << p << " " << id << endl;
            outFile.close();
            cout << "Record saved to file \n";
        }
    }



    // Search by namee
    void search(string searchName) {
        bool found = false;
        for (int i = 0; i < guestCount; i++) {
            if (guestList[i].getName() == searchName) {
                cout << "Found: ";
                guestList[i].display();
                cout << endl;
                found = true;
            }
        }
        if (!found) cout << "guest not found \n";
    }

    //search by  number
    void search(int index) {
        if (index >= 0 && index < guestCount) {
            guestList[index].display();
            cout << endl;
        } else {
            cout << "Invalid index.\n";
        }
    }

    void showFileRecords() {
        ifstream inFile("database.txt");
        string n, p, id;
        cout << "\n ALL RECORDS STORED IN FILE \n";
        while (inFile >> n >> p >> id) {
            cout << "Guest:- " << n << " | ID: " << id << endl;
        }
        inFile.close();
    }
};




int main() {
    HotelSystem system;
    int choice;

    do {
        cout << "\n HOTEL Managment Sysrem --" << endl;
        cout << "1. Add New Guest" << endl;
        cout << "2. View All Saved Reccords (File)" << endl;
        cout << "3. Searc Guest by Name" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter choice: ";
        cin >> choice;

        if (choice == 1) {
            system.addGuest();
        } 
        else if (choice == 2) {
            system.showFileRecords();
        } 
        else if (choice == 3) {
            string sName;
            cout << "Enter name tosearch: ";
            cin >> sName;
            system.search(sName); 
        }

    } while (choice != 4);

    cout << "Program exited.  data is safed in txt" << endl;
    return 0;
}