const contactApi = {}
const url = 'https://playground.4geeks.com/contact'

contactApi.getAgenda = async () => {
    try {
        const resp = await fetch(url+'/agendas/pepe')
        console.log(resp.status)
        if (resp.status == 404) return contactApi.createAgenda();
        if (!resp.ok) throw new Error('error getting angenda');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

contactApi.createAgenda = async () => {
    try {
        const resp = await fetch(url+'/agendas/pepe', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!resp.ok) throw new Error('error getting angenda');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

contactApi.createContact = async (newContact) => {
 try {
        const resp = await fetch(url+'/agendas/pepe/contacts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        if (!resp.ok) throw new Error('error getting angenda');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


contactApi.editContact = async (contactInfo) => {
 try {
        const resp = await fetch(url+'/agendas/pepe/contacts/'+contactInfo.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactInfo)
        })
        if (!resp.ok) throw new Error('error getting angenda');
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


contactApi.deleteContact = async (id) => {
 try {
        const resp = await fetch(url+'/agendas/pepe/contacts/'+id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (!resp.ok) throw new Error('error getting angenda');
    } catch (error) {
        console.log(error)
    }
}



export default contactApi
